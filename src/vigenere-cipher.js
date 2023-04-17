const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.reverse = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  // letter = [
  //   "A",
  //   "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "J",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "T",
  //   "U",
  //   "V",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
  // ];

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    let messageUpper = message.toUpperCase();
    let keyUpper = key.toUpperCase();
    let result = "";
    let count = 0;
    for (let i = 0; i < messageUpper.length; i++) {
      if (!this.alphabet.includes(messageUpper[i])) {
        result += messageUpper[i];
        continue;
      }
      if (count > keyUpper.length - 1) count = 0;
      let value =
        this.alphabet.indexOf(messageUpper[i]) +
        this.alphabet.indexOf(keyUpper[count]);
      count++;
      while (value >= this.alphabet.length) {
        value -= this.alphabet.length;
      }
      result += this.alphabet[value];
    }

    return this.reverse ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    let messageUpper = message.toUpperCase();
    let keyUpper = key.toUpperCase();
    let result = "";
    let count = 0;
    for (let i = 0; i < messageUpper.length; i++) {
      if (!this.alphabet.includes(messageUpper[i])) {
        result += messageUpper[i];
        continue;
      }
      if (count > keyUpper.length - 1) count = 0;
      let value =
        this.alphabet.indexOf(messageUpper[i]) -
        this.alphabet.indexOf(keyUpper[count].toUpperCase());
      count++;
      if (value < 0) {
        value = this.alphabet.length - Math.abs(value);
      }
      result += this.alphabet[value];
    }

    return this.reverse ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
