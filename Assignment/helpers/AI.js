const Helper = require('@codeceptjs/helper');

/**
 * Minimal AI helper để heal hoạt động được
 */
class AI extends Helper {
  async healFailedStep(context) {
    const { step } = context;
    console.log(`🧠 Healing step [${step.name}] with locator ${step.args[0]}`);
    // Cho heal.js tự gọi request() trong config
    return null;
  }
}

module.exports = AI;
