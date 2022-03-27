// condition ? statement-if-true : statement-if-false;
function checkEquality(a, b) {
  return a === b ? true : false;
}

console.log(checkEquality(2, 2));

// use multiple conditional (Ternary) operator
function checkNum(number) {
  return number > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';
}
console.log(checkNum(2));
