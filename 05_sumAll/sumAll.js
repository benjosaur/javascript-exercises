const sumAll = function (start, fin) {
  total = 0;
  if (
    typeof start != "number" ||
    typeof fin != "number" ||
    Math.floor(start) !== start ||
    Math.floor(fin) !== fin ||
    start < 0 ||
    fin < 0
  ) {
    return "ERROR";
  }
  const low = start <= fin ? start : fin;
  const high = start <= fin ? fin : start;
  for (i = low; i <= high; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
