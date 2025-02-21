const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(testActiv) {
  let testActivNum = Number(testActiv);
  if (!testActiv) {
    return false;
  }
  if (
    !Number.isFinite(testActivNum) ||
    typeof testActiv !== "string" ||
    typeof testActiv === NaN ||
    testActiv.includes(" ")
  ) {
    return false;
  }
  if (testActivNum > 15 || testActivNum <= 0) {
    return false;
  }
  let t;
  t = (Math.log(MODERN_ACTIVITY / testActivNum) / 0.693) * HALF_LIFE_PERIOD;
  return Math.ceil(t);
}

module.exports = {
  dateSample,
};
