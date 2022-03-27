// use the rest operator with function parameters
// the rest operator is three dots '...'
const sum = (function () {
  return function sum(...params) {
    return params.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 9, 40));
