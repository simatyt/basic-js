function makeVigenereCube(alphabet) {
  const cube = Array.from(Array(alphabet.length), () => []);
  for (let row = 0; row < alphabet.length; row++) {
    for (let col = 0; col < alphabet.length; col++) {
      cube[row][col] = alphabet[(col + row) % alphabet.length];
    }
  }
  return cube;
}


class VigenereCipheringMachine {

  
  constructor(
    direct = true,
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  ) {
    this.isDirect = direct;
    this.cube = makeVigenereCube(alphabet);
    this.abet = alphabet;
  }

  baseFunc(input, key, operation) {
    this.checkArgs(input, key);
    input = this.prepareInput(input);
    key = this.prepareKey(key, input);

    const result = [];
    for (let i = 0; i < input.length; i++) {
      this.processSymbol(input[i], result, operation, key);
    }

    return result;
  }


  processSymbol(symbol, result, operation, key) {
    if (this.abet.includes(symbol)) {
      result.push(operation.call(this, symbol, key.shift()));
    } else {
      result.push(symbol);
    }
  }


  encrypt(msg, key) {
    const cipher = this.baseFunc(msg, key, this.encode);
    this.reverseIfNeeded(cipher);
    return this.joinAndUpper(cipher);
  }


  decrypt(cipher, key) {
    const msg = this.baseFunc(cipher, key, this.decode);
    this.reverseIfNeeded(msg);
    return this.joinAndUpper(msg);
  }

  encode(char, key) {
    const row = this.abet.indexOf(key);
    const col = this.abet.indexOf(char);
    return this.cube[row][col];
  }


  decode(char, key) {
    const row = this.abet.indexOf(key);
    const col = this.cube[row].indexOf(char);
    return this.abet[col];
  }


  prepareInput(input) {
    return input.toUpperCase();
  }


  prepareKey(key, input) {
    return key.repeat((input.length / key.length) + 1).toUpperCase().split("");
  }


  reverseIfNeeded(arr) {
    if (!this.isDirect) arr.reverse();
  }


  checkArgs(a1, a2) {
    if (!a1 || !a2) {
      throw new Error("Both arguments must be specified");
    }
  }


  joinAndUpper(arr) {
    return arr.join("").toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;