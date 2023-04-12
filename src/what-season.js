const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  console.log(Object.getOwnPropertyNames(date).length);
  if (Object.getOwnPropertyNames(date).length > 0 || !date.getTime)
    throw new Error("Invalid date!");

  let answer = "";
  let month = date.getMonth();
  console.log(month);

  switch (month) {
    case 11:
      answer = "winter";
      break;
    case 0:
      answer = "winter";
      break;
    case 1:
      answer = "winter";
      break;
    case 2:
      answer = "spring";
      break;
    case 3:
      answer = "spring";
      break;
    case 4:
      answer = "spring";
      break;
    case 5:
      answer = "summer";
      break;
    case 6:
      answer = "summer";
      break;
    case 7:
      answer = "summer";
      break;
    case 8:
      answer = "autumn";
      break;
    case 9:
      answer = "autumn";
      break;
    case 10:
      answer = "autumn";
      break;
    default:
      answer = "Unable to determine the time of year!";
      break;
  }

  return answer;
}

module.exports = {
  getSeason,
};
