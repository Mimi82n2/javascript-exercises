const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let res = arr.reduce((total, n) => {
    return total + n;
  }, 0);
  return res;
};

const multiply = function(nums) {
  let res = nums.reduce((prod, n) => {
    return prod * n;
  });
  return res
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  res = 1;
  while (a > 0){
    res *= a;
    a -= 1;
  }
  return res;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
