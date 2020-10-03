const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turn = Math.pow(2, disksNumber)-1;
  const seconds = Math.floor(((Math.pow(2, disksNumber)-1)/turnsSpeed)*3600);
  
  return {
    turn: turn,
    seconds: seconds
  }
};
