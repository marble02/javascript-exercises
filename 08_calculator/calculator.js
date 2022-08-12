const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
};

const multiply = function(arr) {
  let ans = 1;
  for (let i = 0; i < arr.length; i++) {
    ans *= arr[i];
  }
  
  if (arr.length > 0) {
    return ans
  } else {
    return "ERROR"
  }
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
	if (n == 0) {
    return 1
  }

  return factorial(n - 1) * n
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
