const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  matrix.forEach(element => {
    if (typeof(element) === Array) {
      element.forEach(elementSecond => {
        if (elementSecond.includes('^^')) sum = sum + 1;
      })
    } else {
        if (element.includes('^^')) sum = sum + 1;
    }
  });
  return sum;
};
