/* Data Types:
    undefined, null, boolean, string, symbol, number, and object
*/

// Javascript uses cameCase
var properCamelCase;

// variables declared using 'var' can be changed|'var' have global scope
var myName = 'JI_DEvv';
myName = 'JI';

// variables declared using 'let' can be changed|'let' have local scope
let myAge = '123';
myAge = '12345';

// variables declared using 'const' cannot be changed|'const' have global scope
const isMyHobby = 'Coding and Programming';

// example practice

// variable 'a' is an 'undefined' variable
var a;

// variable 'b' is a 'number' variable
var b = 7;

// variable 'a' assigned a value
var a = 7;

// variable 'b' assigned to variable 'a'
var b = a;

// console.log is use to print output
console.log(b);

console.log('Basic Maths');
// **Basic Maths with variables**
// adding numbers
var sum = 5 + 5;
console.log(sum); // prints 10

// subtracting numbers
var subtract = 5 - 10;
console.log(subtract); // prints -5

// multiplying numbers
var multiply = 5 * 10;
console.log(multiply); // prints 50

// dividing numbers
var divide = 10 / 10;
console.log(divide); // prints 1

console.log('Increment & Decrement');
/***Increment and Decrement***/

// incrementing means adding one number
var myIncrement = 5;
// incrementing myIncrement
myIncrement++; // this means myIncrement = myIncrement + 1;
console.log(myIncrement); // prints 6

// decrementing means subtracting one number
var myDecrement = 5;
// decrementing myDecrement
myDecrement--; // this means myDecrement = myDecrement - 1;
console.log(myDecrement); // prints 4

console.log('Decimals');
/*** Decimal numbers and mathematical (known as floating point numbers) ***/
var myDecimal = 5.6;

// multiply Decimal numbers
var decimalMultiply = 2.5 * 2.0;
console.log(decimalMultiply); // prints 5

// divide Decimal numbers
var decimalDivide = 4.4 / 2.0;
console.log(decimalDivide); // prints 2.2

console.log('Remainder');
/****Finding the Remainder****/
var remainder;
// the remainder operator is '%'
remainder = 5 % 89;
console.log(remainder); // prints 5

console.log('Augmented addition');
/*****Compound assignment with augmented addition*****/
var a = 3;
var b = 2;
var c = 6;

// Augmented addition
a += 12; // this means a = a + 12
b += c; // this means b = b + c
console.log(a); // prints 15
console.log(b); // prints 8

console.log('Augmented subtraction');
/*****Compound assignment with augmented subtraction*****/
var a = 5;
var b = 18;
var c = 12;

// Augmented subtraction
a -= 3; // this means a = a - 3
b -= c; // this means b = b - c

console.log(a); // prints 2
console.log(b); // prints 6

console.log('Augmented multiplication');
/*****Compound assignment with augmented multiplication*****/
var a = 7;
var b = 8;
var c = 10;

// Augmented multiplication
a *= 5; // this means a = a * 5
b *= c; // this means b = b * c

console.log(a); // prints 35
console.log(b); // prints 80

console.log('Augmented division');
/*****Compound assignment with augmented division*****/
var a = 10;
var b = 58;
var c = 10;

// Augmented division
a /= 5; // this means a = a / 5
b /= c; // this means b = b / c

console.log(a); // prints 2
console.log(b); // prints 5.8

console.log('Declaring string variables');
// Declaring string variables
// You can use both single and double quotes

var firstName = 'JI';
var lastName = 'DEvv';

// Escaping literal quotes in strings
var myString = 'I am a "double quoted" string'; // use the '\' mark to escape quotes errors
console.log(myString);
// second method is to use single quotes
var myString = 'I am a "double quoted" string';
console.log(myString);

// Escaping sequences in strings
/* 
CODE  OUTPUT
\'    single quote
\"    double quote
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    form feed*/

// examples:
var myString = 'fist\nsecond';
console.log(myString);

var myString = 'fist\rsecond';
console.log(myString);

var myString = 'fist\fsecond';
console.log(myString);

console.log('Concatenating strings with plus operator');
// concatenating strings with plus operator
var myString = 'I am first. ' + 'I am second.';
console.log(myString);

console.log('Concatenating strings with plus equal operator');
// concatenating strings with plus equal operator
var myString = 'I am first. ';
myString += 'I am second';
console.log(myString);

console.log('Constructing strings with variables');
// constructing strings with variables

var myName = 'JI_DEvv';
var myString = 'Hi ' + myName + ', How are you?';
console.log(myString);

console.log('Appending variables to string');
// appending variables to string
var anAdjective = 'fun, easy and awesome!';
var myHobby = 'Coding';
myHobby += anAdjective; // this means myHobby = myHobby + anAdjective

console.log('Find length of string');
// find length of string
myString = 'JI_DEvv';
var myStringLength = myString.length;
console.log(myStringLength);

console.log('Bracket notion to find fist character of string');
// bracket notion to find fist character of string
var firstLetterOfMyString = myString[0];
console.log(firstLetterOfMyString);

console.log('String immutability');
// string immutability
var myString = 'Jello World';

myString[0] = 'H'; // fix me
myString = 'Hello World'; // fixed

console.log('Bracket notion to find last character of string');
// bracket notion to find last character of string
var myString = 'a String';
var lastLetterOfMyString = myString[myString.length - 1];
console.log(lastLetterOfMyString);
