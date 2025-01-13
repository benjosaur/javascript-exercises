const palindromes = function (str) {
  str = str
    .trim()
    .toLowerCase()
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, "");
  rev = str.split("").reverse().join("");
  return str == rev;
};

// Do not edit below this line
module.exports = palindromes;
