const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let objOptions = Object.assign({}, options);
  objOptions.separator =  options.separator || '+';
  objOptions.additionSeparator = options.additionSeparator || '|';
  objOptions.repeatTimes = options.repeatTimes || 1;

  let strRepeatArray = [];
  let additionArray = [];

  for (let i = 0; i < objOptions.repeatTimes; i++) {
    strRepeatArray[i] = str;
  }

  for(let i = 0; i < objOptions.additionRepeatTimes; i++) {
    additionArray[i] = objOptions.addition;
  }
  let additionStr = additionArray.join(objOptions.additionSeparator);

  return strRepeatArray.join(additionStr + objOptions.separator) + objOptions.addition;
};
  