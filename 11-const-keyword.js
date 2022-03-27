// Declare a Read-Only variable with the const keyword
// const has all features of the let keyword but it is declared as read-only.
// read-only means you cannot reassign or change the value of a const variable

function printMany(string) {
  const Sentence = string + ' is cool';
  for (let i = 0; i < string.length; i++) {
    console.log(Sentence);
  }
}
printMany('string');

// mutate an array declared with const (this means updating an array declared with const)
const array = [1, 2, 3];
console.log('Before: ', array);

function editArray() {
  'use strict';
  // array = [2, 1, 3]; will throw an error
  array[0] = 2;
  array[1] = 1;
  array[2] = 3;
  // the above three lines will not throw an error
}

editArray(); // updated the array
console.log('After: ', array);

// Prevent object Mutation (This means not allowing an array to be updated)
function freezeObject() {
  'use strict';
  const Math = {
    JI: 3.2,
  }; // we wants to 1: 3.2 as permanent
  Object.freeze(Math); // this will prevent
  try {
    Math.JI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return Math.JI;
}

const math = freezeObject();
