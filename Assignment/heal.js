const { heal } = require("codeceptjs");
const fs = require("fs");
require("dotenv").config();
const Groq = require("groq-sdk");

heal.addRecipe("ai", {
  priority: 10,
  suggest: true,
  prepare: {
    html: async ({ I }) => {
      const html = await I.grabHTMLFrom("body");
      return html;
    },
  },
  steps: [
    "click",
    "fillField",
    "appendField",
    "selectOption",
    "attachFile",
    "checkOption",
    "uncheckOption",
    "doubleClick",
  ],
  fn: async (context) => {
    const { step, html } = context;
    const locator = step.args[0];

    console.log(`🧠 Healing failed step: ${step.name}(${locator})`);
    const prompt = `
You are an AI testing assistant. The following HTML was captured from a failed UI test.

Find the best CSS or XPath selector that matches the intended element when the failed locator "${locator}" is not found.

Return ONLY the new selector (no explanation).

HTML:
${html}
    `;

    try {
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });

      const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      });

      const suggestion = completion.choices[0]?.message?.content?.trim();

      if (suggestion) {
        console.log(`✅ AI suggestion: ${suggestion}`);
        return suggestion;
      } else {
        console.log("⚠️ No valid suggestion from AI.");
        return null;
      }
    } catch (err) {
      console.error("❌ AI healing error:", err.message);
      return null;
    }
  },
});
