// takes string and return into integer(number)
function convertToInteger(string) {
  return parseInt(string);
}

console.log(convertToInteger('98'));

// Use the parseInt() function with a Radix
// Radix specifies the base of the number

function radixToInteger(string) {
  return parseInt(string, 2); // 2 is the base
}
console.log(radixToInteger('11'));
