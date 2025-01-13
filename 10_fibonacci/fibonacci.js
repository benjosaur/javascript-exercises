const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  base = 0;
  second = 1;
  third = 1;
  for (let i = 1; i <= +n; i++) {
    fourth = third + second;
    [base, second, third] = [second, third, fourth];
  }
  return base;
};

// Do not edit below this line
module.exports = fibonacci;
