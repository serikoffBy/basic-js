const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new SyntaxError("Ошибка в данных");
  if(arr.length === 0) return [];
  let newArray = [];
  let helpArr = [];
  for(let i = 0; i <= arr.length - 1; i++) {
    switch (arr[i]) {
      case '--discard-next': {
        if(i === arr.length-1) {
          break;
        } 
        i++;
        break;
      }
      case '--discard-prev': {
        if(i === 0) break;
        if(helpArr[helpArr.length - 1] === arr[i - 1]) {
          helpArr.splice(helpArr.length-1, helpArr.length-1);
        }
        break;
      }
      case '--double-next': {
        if(i === arr.length-1) break;
        helpArr.push(arr[i + 1]);
        break;
      }
      case '--double-prev': {
        if(i === 0) break;
        if(helpArr[helpArr.length - 1] === arr[i - 1]) {
          helpArr.push(arr[i - 1]);
        }
        break;
      }
      default: {
        helpArr.push(arr[i]);

        break;
      }
    }
  }
return helpArr;
};
