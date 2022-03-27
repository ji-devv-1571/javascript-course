// use the spread operator to evaluate arrays in-place
const arrayMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
let array;
(function () {
  array = [...arrayMonths]; // array will copy the arrayMonths
  arrayMonths[0] = 'January';
})();
console.log(array);
console.log(array);
