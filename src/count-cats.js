const CustomError = require("../extensions/custom-error");

module.exports = function countCats(d2array) {
  let result = 0;

  d2array
    .flatMap(x => x.slice())
    .forEach(item => {
      if (item === "^^") {
        result++;
      }
    });

  return result;
};