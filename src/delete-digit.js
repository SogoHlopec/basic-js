const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split("");
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    const newArr = arr.map((el) => el);
    newArr.splice(i, 1);
    const number = +newArr.join("");

    if (maxNum < number) {
      maxNum = number;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
