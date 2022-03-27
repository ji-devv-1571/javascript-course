// use arrow functions to write concise anonymous functions
// wrong way to write anonymous functions
var anonymous = function () {
  return new Dates();
};

// right & shorter way to write anonymous functions (using arrow functions)
const anonymousFunction = () => new Dates();
// write arrow functions with parameters

const joinFunction = (a, b) => a.concat(b); // without return

const joinFunctionWithReturn = (a, b) => {
  return a.concat(b); // with return
};

console.log(joinFunction('JI_', 'DEvv'));
console.log(joinFunctionWithReturn('JI_', 'DEvv'));

// Write higher order arrow functions
const Array = [1, -0, 2.5, 37, 57];

const squareList = (array) => {
  const squaredIntegers = array
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers; // result of this function will be numbers more than zero and integers with their squares not decimals
};

const arrayFilter = squareList(Array);
console.log(arrayFilter);

// write higher order arrow functions with default parameters
const sum = (function () {
  // function is declared here as a parameter
  return function sum(number, value = 1) {
    return number + value;
  };
})();
console.log(sum(4, 7));
