const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  if (matrix.length === 0) return 0;
  matrix.forEach(element => {
    if(typeof(element) === Array) {
      if (element.includes('^^')) sum = sum + 1;
    } 
  });
  return sum;
};
