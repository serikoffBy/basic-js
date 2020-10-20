const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  let objOptions = Object.assign({}, options);
  objOptions.separator =  options.separator || '+';
  objOptions.additionSeparator = options.additionSeparator || '|';
  objOptions.repeatTimes = options.repeatTimes || 1;
  objOptions.additionRepeatTimes = options.additionRepeatTimes || 1;
  objOptions.addition = (options.addition === undefined) ? '' : String(options.addition);
  
  console.log(objOptions.addition)

  let strRepeatArray = [];
  let additionArray = [];

  for (let i = 0; i < objOptions.repeatTimes; i++) {
    strRepeatArray[i] = str;
  }

  for(let i = 0; i < objOptions.additionRepeatTimes; i++) {
    additionArray[i] = objOptions.addition;
  }
  
  let additionStr = additionArray.join(objOptions.additionSeparator);

  return strRepeatArray.join(additionStr + objOptions.separator) + additionStr;
};