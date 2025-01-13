const reverseString = function (string) {
  arr = [];
  for (const letter of string) {
    arr.push(letter);
  }
  arr.reverse();
  return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
