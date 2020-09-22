module.exports = function repeater(
  str, {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  }) {

  str = String(str);
  addition = String(addition);
  const suffix = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const result = new Array(repeatTimes).fill(str + suffix).join(separator);
  return result;
};