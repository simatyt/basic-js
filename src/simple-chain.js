const {
  verify
} = require("sinon");

let chain = [];

const chainMaker = {

  getLength() {
    return chain.length;
  },

  addLink(value) {

    if (value === undefined) {
      chain.push('');
    }

    chain.push(value);
    return chainMaker;
  },

  removeLink(position) {

    if (isNaN(position) || !chain.hasOwnProperty(position - 1)) {
      chain = [];
      throw new Error(`The position provided doesn't exists (provided: ${position})`);
    }

    chain.splice(position - 1, 1);
    return chainMaker;
  },

  reverseChain() {
    chain.reverse();
    return chainMaker;
  },

  finishChain() {
    const result = chain.map(x => `( ${x} )`).join("~~");
    chain = [];
    return result;
  }
};

module.exports = chainMaker;