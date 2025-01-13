const removeFromArray = function (arr, ...args) {
  for (i of args) {
    arr = arr.filter((value) => value !== i);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
