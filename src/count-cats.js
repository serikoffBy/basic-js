const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  if (matrix.length === 0) return 0;
  matrix.forEach(element => {
      element.forEach(elementSecond => {
        if(elementSecond === '^^') sum +=1;
      }); 
  });
  return sum;
};
