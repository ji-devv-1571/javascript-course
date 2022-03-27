// generate decimal number
function randomDecimal() {
  return Math.random();
}

console.log(randomDecimal());

// generate whole number
var randomNumber0And19 = Math.floor(Math.random() * 21); // example

function randomNumber() {
  // random number from 0 to 10
  return Math.floor(Math.random() * 10);
}

console.log(randomNumber());

// generate whole numbers within a range

function generateWithinRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateWithinRange(5, 50));
