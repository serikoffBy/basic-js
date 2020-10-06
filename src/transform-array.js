const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArray = [];
  if(Array.isArray(arr) && arr.length > 0) {
    for(let i = 0; i <= arr.length - 1; i++) {
      switch (arr[i]) {
        case '--discard-next': {
          i++;
          break;
        }
        case '--discard-prev': {
          if (newArray.length !== 0 && arr[i - 2] !== '--discard-next') {
            newArray.pop();
          }
          break;
        }
        case '--double-next': {
          if(i === arr.length-1) break;
          newArray.push(arr[i + 1]);
          break;
        }
        case '--double-prev': {
          if (i !== 0 && arr[i - 2] !== '--discard-next') {
            newArray.push(arr[i - 1]);
          }
          break;
        }
        default: {
          newArray.push(arr[i]);
          break;
        }
      }
    }  
  }
  else {
    if(!arr) {
      throw new Error();
    }
  }
return newArray;
};
