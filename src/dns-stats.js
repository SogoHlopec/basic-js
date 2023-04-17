const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((el) => {
    const arrKey = el.split(".").reverse();
    let key = ".";
    for (let i = 0; i < arrKey.length; i++) {
      if (i === 0) {
        key = key + arrKey[0];
      } else {
        key = key + "." + arrKey[i];
      }
      if (!result[key]) {
        result[key] = 1;
      } else {
        result[key] = result[key] + 1;
      }
    }
  });
  return result
}

module.exports = {
  getDNSStats,
};
