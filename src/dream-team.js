const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.length === 0 ||) return false;
  if (!Array.isArray(members)) return false;
  let result = [];
  members.forEach(element => {
    if(typeof(element) === "string") {
      result.push(element.trim()[0].toUpperCase());
    }
  });
  return result.sort().join('');
};
