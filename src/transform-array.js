const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArray = [];
  if(Array.isArray(arr) && arr.length !== 0) {
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
          if(newArray[newArray.length - 1] === arr[i - 1]) {
            newArray.splice(newArray.length-1, newArray.length-1);
          }
          break;
        }
        case '--double-next': {
          if(i === arr.length-1) break;
          newArray.push(arr[i + 1]);
          break;
        }
        case '--double-prev': {
          if(i === 0) break;
          if(newArray[newArray.length - 1] === arr[i - 1]) {
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
      throw new Error('Not Array');
    }
  }
return newArray;
};
