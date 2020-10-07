const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position <= 0 || position > this.chain.length || isNaN(position) || (parseInt(position) !== position)) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;