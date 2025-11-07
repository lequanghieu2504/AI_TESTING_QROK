const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
require("dotenv").config();
require("./heal");

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://127.0.0.1:5500/Assignment/",
      show: true,
    },
    AI: {
      require: "./helpers/AI.js", // 🔥 Bắt buộc thêm dòng này
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "codeceptAI",

  // 🧠 Cấu hình AI
  ai: {
    request: async (messages) => {
      const Groq = require("groq-sdk");
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });

      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: "llama-3.1-8b-instant",
      });

      return chatCompletion.choices[0]?.message?.content || "";
    },
  },

  plugins: {
    screenshotOnFail: { enabled: true },
    heal: { enabled: true },
  },
};
