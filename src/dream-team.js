const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  let result = [];
  members.forEach(element => {
    if(typeof(element) === "string") {
      result.push(result.trim()[0].toUpperCase());
    }
  });
  return result.sort().join('');
};
