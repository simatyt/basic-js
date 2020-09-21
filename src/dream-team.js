module.exports = function createDreamTeam(stringArray) {

  if (
    !Array.isArray(stringArray) ||
    stringArray.length === 0 ||
    !stringArray
  ) return false;

  const result = stringArray.filter(isNotEmptyString).map(getFirstLetter).sort().join("");

  if (result) {
    return result;
  } else {
    return false;
  }

};

function isNotEmptyString(s) {
  return s && typeof s === 'string' && s !== "";
}

function getFirstLetter(str) {
  return str.trim()[0].toUpperCase();
}