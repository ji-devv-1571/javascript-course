// write reusable code with functions
function printHelloMessage(toPrint) {
  console.log('Hello! ' + toPrint);
}
printHelloMessage('JI_DEvv'); // print Hello! JI_DEvv

// Passing values to function with arguments (known as parameters)
// In the printHelloMessage 'toPrint' is a parameter
function sum(a, b) {
  console.log(a + b / 10);
}
sum(1, 50);

// global scope & functions
var myGlobalScope = 100;

function fun1() {
  var myLocalScope = 50;
}

function fun2() {
  var output = '';
  // '!=' means unequal
  if (typeof myGlobalScope != 'undefined') {
    var output = 'myGlobalScope: ' + myGlobalScope;
    console.log(output);
  }

  if (typeof myLocalScope != 'undefined') {
    var output = 'myLocalScope: ' + myLocalScope; // it turns into infinite loop
    console.log(output);
  }
}

fun1();
fun2();

// local scope & functions
function localScope() {
  var myVar = 60;
  console.log(myVar);
}

// return a value from a function with return
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10)); // prints 3

// Assignment with a returned value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

// changing changed's value to the return of 'change'
changed = change(10);

// stand-in-line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));
// 'JSON.stringify' is a command to convert a array into a string
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

// Boolean values
function booleans() {
  return true;
}
booleans;

// Use conditional logic with  IF statements
function trueOrFalse(isTrue) {
  if (isTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

console.log(trueOrFalse(true));

// comparison with the equality operator
// '=='

function testEquality(value) {
  if (value == 10) {
    return 'Equal';
  }
  return '"Not Equal"';
}

console.log(testEquality(16));

// comparison with the strict equality operator
function testStrictEquality(value) {
  if (value === 10) {
    return 'Equal';
  }
  return '"Not Equal"';
}

console.log(testStrictEquality('10')); // the solution is 10 not '10'

// comparison with the inequality operator
function testNotEquality(value) {
  if (value != null) {
    return 'Contains Data';
  }
  return 'Null';
}

console.log(testNotEquality(6)); // prints 'Contains Data'

// comparison with the strict inequality operator
function testStrictNotEquality(value) {
  if (value !== 554) {
    return 'Not Equal';
  }
  return 'Equal';
}

console.log(testStrictNotEquality('556'));

// comparison with the greater operator
function testGreaterThan(value) {
  if (value > 100) {
    return 'Greater than 100';
  }
  if (value > 10) {
    return 'Greater than 10';
  }
  return 'Less 10';
}

console.log(testGreaterThan(5));

// comparison with the greater than or equal to operator

function testGreaterThanOrEqual(value) {
  if (value >= 100) {
    return '100 or greater than 100';
  }
  if (value >= 80) {
    return '80 or greater than 80';
  }
  return 'less than 80';
}

console.log(testGreaterThanOrEqual(95));

// comparison with the less than operator
function testLessThan(value) {
  if (value < 100) {
    return 'Less than 100';
  }
  if (value < 10) {
    return 'Less than 10';
  }
  return 'Greater 10';
}

console.log(testLessThan(5));

// comparison with the greater than or equal to operator

function testLessThanOrEqual(value) {
  if (value <= 100) {
    return '100 or Less than 100';
  }
  if (value <= 80) {
    return '80 or Less than 80';
  }
  return 'Greater than 80';
}

console.log(testLessThanOrEqual(105));

// comparison of two values at same time using and '&&' operator
function testLogicalAnd(value) {
  if (value >= 150 && value <= 150) {
    return 'Yes';
  }
  return 'No';
}

console.log(testLogicalAnd(50));

// comparison with the logical or '||' operator
function testLogicalOr(value) {
  if (value >= 150 || value <= 150) {
    return 'Yes';
  }
  return 'No';
}

console.log(testLogicalOr(130));

// Else statements
function testElse(value) {
  var result;
  if (value > 100) {
    result = 'Greater than 100';
  } else {
    result = '100 or smaller';
  }
  return result;
}

console.log(testElse(50));

// else/if statements
function testElseIf(value) {
  if (value > 10) {
    return 'Greater than 10';
  } else if (value < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 10 and 5';
  }
}

console.log(testElseIf(78));

// Logical order in if/else statements

// this is the wrong order
function testWrongOrder(value) {
  if (value > 10) {
    return 'Greater than 10';
  } else if (value < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 10 and 5';
  }
}

// this is the right order
function testRightOrder(value) {
  if (value < 5) {
    return 'Smaller than 5';
  } else if (value > 10) {
    return 'Greater than 10';
  } else {
    return 'Between 10 and 5';
  }
}

console.log(testRightOrder(7));

/*
 chaining if/else statements to fulfill the following conditions:

value < 5 - return "Tiny"
value < 10 - return "Small"
value < 15 - return "Medium"
value < 20 - return "Large"
value >= 20 - return "Huge"
 */

// Answer ->

function ifElseChain(value) {
  if (value < 5) {
    return 'Tiny';
  } else if (value < 10) {
    return 'Small';
  } else if (value < 15) {
    return 'Medium';
  } else if (value < 20) {
    return 'Large';
  } else {
    return 'Huge';
  }
}

console.log(ifElseChain(14));

// Golf Score
var scoreNames = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];
function golfScore(par, strokes) {
  /*
Strokes       Return
1             "Hole-in-one!"
<= par - 2    "Eagle"
par - 1       "Birdie"
par           "Par"
par + 1       "Bogey"
par + 2       "Double Bogey"
>= par + 3    "Go Home!"
*/

  if (strokes == 1) {
    return scoreNames[0];
  } else if (strokes <= par - 2) {
    return scoreNames[1];
  } else if (strokes == par - 1) {
    return scoreNames[2];
  } else if (strokes == par) {
    return scoreNames[3];
  } else if (strokes == par + 1) {
    return scoreNames[4];
  } else if (strokes == par + 2) {
    return scoreNames[5];
  } else if (strokes >= par + 3) {
    return scoreNames[6];
  }
}
console.log(golfScore(5, 3));

// switch statements
function switchStatement(value) {
  var out = '';
  switch (value) {
    case 1:
      out = 'one';
      break;
    case 2:
      out = '2';
      break;
    case 3:
      out = 'three';
      break;
    case 4:
      out = 'four';
      break;
  }
  return out;
}

console.log(switchStatement(2));

// default options in switch statements
// default is to prevent blank output because the variable 'out' has no value assigned to it
function defaultSwitch(value) {
  var out = '';
  switch (value) {
    case 1:
      out = 'one';
      break;
    case 2:
      out = 'two';
      break;
    case 3:
      out = 'three';
      break;
    case 4:
      out = 'four';
      break;
    default:
      out = 'Numbers';
      break;
  }
  return out;
}

// Multiple identical options in switch statements
function multipleSwitch(value) {
  var out = '';
  switch (value) {
    case 1:
    case 2:
    case 3:
      out = 'HI 123';
      break;
    case 4:
    case 5:
    case 6:
      out = 'HI 456';
      break;
  }
  return out;
}
console.log(multipleSwitch(1));

/* Replacing if/else chain with switch statement -> 
// chain to replace:

function ifElseChain(value) {
  if (value < 5) {
    return 'Tiny';
  } else if (value < 10) {
    return 'Small';
  } else if (value < 15) {
    return 'Medium';
  } else if (value < 20) {
    return 'Large';
  } else {
    return 'Huge';
  }
}



*/
function chainToSwitch(value) {
  var out = 'asdf';
  switch (value) {
    case 'a':
      out = 'Tiny';
      break;
    case 'b':
      out = 'Small';
      break;
    case 'c':
      out = 'Medium';
      break;
    case 'd':
      out = 'Large';
      break;
  }
  return out;
}

console.log(chainToSwitch('a'));

// Returning boolean values from functions
function isLess(a, b) {
  /* Don't do this

  if (a < b) {
    return true;
  } else {
    return false;
  }
*/
  // Do this instead
  return a < b;
}

console.log(isLess(5, 6));
