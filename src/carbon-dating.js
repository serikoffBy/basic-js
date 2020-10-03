const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(arguments.length === 0 || typeof sampleActivity !== 'string' || sampleActivity.length === 0)
    return false;
  
  if ((parseFloat(sampleActivity) < 1 || parseFloat(sampleActivity) > 15) || Number.isNaN(parseFloat(sampleActivity))) return false;
  else {
    const k = 0.693/HALF_LIFE_PERIOD;
    return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / k);
  }
};
