// While Loop
var testWhileLoopArray = [];

var i = 0;
while (i < 6) {
  testWhileLoopArray.push(i);
  i++; // this means i = i + 1;
}

console.log(testWhileLoopArray);

// For loop (most common)
var testForLoopArray = [];
for (var i = 0; i < 11; i++) {
  testForLoopArray.push(i);
}

console.log(testForLoopArray);

// number with a for loop parameter i
var number = [];

for (var i = 0; i < 10; i += 1.5) {
  number.push(i);
}
console.log(number);

// Count backwards with a for loop
var countBack = [];

for (var i = 20; i > 0; i--) {
  countBack.push(i);
}
console.log(countBack);

// iterate through an array with a for loop
var array = [9, 10, 11];
var total = 0;

for (var i = 0; i < array.length; i++) {
  total += array[i];
}

console.log(total);

// nesting for loop

function multiplyAll(array) {
  var output = 1;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      output *= array[i][j];
    }
  }
  return output;
}

var result = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 8],
]);
console.log(result);

// Do...while loop
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);

// Profile lookup
// challenge
var contacts = [
  {
    firstName: 'JI_0',
    lastName: 'Devv',
    number: '12345',
  },
  {
    firstName: 'JI_1',
    lastName: 'Devv_1',
    number: '1',
  },
  {
    firstName: 'JI_2',
    lastName: 'Devv_2',
    number: '2',
  },
  {
    firstName: 'JI_3',
    lastName: 'Devv_3',
    number: '3',
  },
  {
    firstName: 'JI_4',
    lastName: 'Devv_4',
    number: '4',
  },
  {
    firstName: 'JI_5',
    lastName: 'Devv_5',
    number: '5',
  },
  {
    firstName: 'JI_6',
    lastName: 'Devv_6',
    number: '6',
  },
  {
    firstName: 'JI_7',
    lastName: 'Devv_7',
    number: '7',
  },
];

function lookupUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property';
    }
  }
  return 'No such contact';
}

var Name = lookupUpProfile('JI_7', 'number');
console.log(Name);
