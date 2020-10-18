const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;  
	  return 1 + Math.max(...arr.map(item => calculateDepth(item)), 0);
  }
};
/*
	function deep (arr) {
    if (!Array.isArray(arr)) return 0;  
	//var result = arr.map(item => deep(item));
    return 1 + Math.max(...arr.map(item => deep(item)), 0);
}
	*/