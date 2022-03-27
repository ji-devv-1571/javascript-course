// var allows to declare a variable with var keyword twice.
// example:
var variable = 'Cat';
var variable = 'Dog';
// the above codes will not throw an error

// let doesn't allow to declare a variable with let keyword twice.
// example:
let cat = 'cat';
`let cat = 'Dog';`;
// the above code lines will throw an error
cat = 'Dog'; // this will not throw an error

// var is always global scoped
// let is block scope driven

// checking scope with 'var' keyword
function checkVarScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    var i = 'block scope';
    console.log('block scope i is: ' + i);
  }
  console.log('function scope i is: ' + i);
  return i;
}

console.log(checkVarScope());

// checking scope with 'let' keyword
// let is scoped where it was defined or declared
function checkLetScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('block scope i is: ' + i);
  }
  console.log('function scope i is: ' + i);
  return i;
}

console.log(checkLetScope());
