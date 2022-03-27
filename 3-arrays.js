console.log('Basic arrays');
// store multiple values with arrays
var user = ['John', 23, 'USA'];

// nested arrays (also known as multi-dimensional arrays)
var nestedArray = [
  [12, 'America', 6],
  ['USA', 'John', 33],
];

// access array data with indexes
var age = user[1];
console.log(age);

// modify array data with indexes
var modifyArray = [15, 45, 80];
modifyArray[1] = 60; // modifyArray now equals [15, 60, 80]

// Access multi-dimensional arrays with indexes
// multiArray is a three layer deep array
var multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
// access data
console.log(multiArray[2][1]); // prints 8

// Updating data of  arrays with push()
var pushArray = [
  ['John', 23],
  ['dog', 45],
];
pushArray.push(['JI', '$150', 150]);

// pop() keeps only the last character of array
var popArray = ['JI', 'DEvv', '$150'];
var clearedArray = popArray.pop();

console.log('Cleared array');
console.log(clearedArray);

// shift() keeps only first character of array
var shiftArray = ['HI', ['JI', 'DEvv']];
clearedArray = shiftArray.shift();
console.log(clearedArray);

// unshift() adds the data to the beginning of array
var unshiftArray = [1, '$', 5];
unshiftArray.unshift(['JI', 'DEvv']);
console.log(unshiftArray);

// Shopping list with nested (Multi-dimensional) arrays
var shoppingList = [
  ['oil', 2],
  ['banana', 5],
  ['juice', 8],
  ['milk', 10],
];

// accessing nested arrays
var myPlants = [
  {
    type: 'flowers',
    list: ['one', 'two', 'three'],
  },
  {
    type: 'trees',
    list: ['one', 'two', 'three'],
  },
];

var treesList = myPlants[1].list[1];
console.log(treesList);