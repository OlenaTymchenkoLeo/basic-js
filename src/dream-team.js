const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrFriends) {
  if (!arrFriends) {
    return false;
  }
  if (typeof arrFriends !== "object") {
    return false;
  }
  let abr = [];
  let arrFriends1 = [];
  console.log(arrFriends.length, arrFriends[0]);
  if (arrFriends.length === 1 && typeof arrFriends[0] === "object") {
    arrFriends1 = arrFriends.flat(1);
  } else arrFriends1 = arrFriends;
  console.log(arrFriends);
  console.log(arrFriends1);
  for (let i = 0; i < arrFriends1.length; i++) {
    let currentName = arrFriends1[i];

    if (typeof currentName === "string") {
      let nameTrim = currentName.trim();
      abr.push(nameTrim[0].toUpperCase());
    }
  }
  let abrUpper = abr.sort().join("");
  return abrUpper;
}

module.exports = {
  createDreamTeam,
};
