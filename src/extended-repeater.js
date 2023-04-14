const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== "string") {
    str = String(str);
  }

  let additions = "";
  let outputStr = "";
  let add = "";
  let strSub = "";

  if (options.addition) {
    additions = options.addition;
  }
  if (options.addition === false) {
    additions = "false";
  }
  if (options.addition === null) {
    additions = "null";
  }
  if (options.additionRepeatTimes && options.additionSeparator) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      add += options.additionSeparator + additions;
    }
    additions += add;
    outputStr = str + additions;
  }
  if (options.additionRepeatTimes && !options.additionSeparator) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      add += "|" + additions;
    }
    additions += add;
    outputStr = str + additions;
  }
  outputStr = str + additions;
  if (options.repeatTimes && options.separator) {
    for (let i = 1; i < options.repeatTimes; i++) {
      strSub += options.separator + outputStr;
    }
    outputStr = outputStr + strSub;
  }
  if (options.repeatTimes && !options.separator) {
    for (let i = 1; i < options.repeatTimes; i++) {
      strSub += "+" + outputStr;
    }
    outputStr = outputStr + strSub;
  }

  return outputStr;
}

module.exports = {
  repeater,
};
