// Objects are just like array but you access data with properties
var myHouse = {
  address: 'address',
  car: 0,
  'bikes a': 2,
  fridge: 1,
};

// Accessing data from object properties with dot notation
var address = myHouse.address;
var car = myHouse.car;

// Accessing data from object properties with bracket notation
// Branch notation is also used when properties have space in their name
var bikes = myHouse['bikes a'];
console.log(bikes);

// accessing objects data with variables
var testObjVariable = {
  1: 'J',
  2: 'K',
  3: 'L',
};
var playerNumber = 1;
var player = testObjVariable[playerNumber];

console.log(player);

// Updating object properties
updateObj = {
  name: 'JI',
  field: 'web-development',
};
// updating name property
updateObj.name = 'web-developer';

// Add new properties to an object using dot notation
var addProperties = {
  name: 'webDev',
  salary: '$150',
};

addProperties.field = 'web development';

// Add new properties to an object using bracket notation
addProperties['address'] = 'address';

// deleting properties from an object (it can only be done with dot notation)
// delete keyword
delete addProperties.address;

// Using object for lookups (replacing switch statement)
function printString(value) {
  var result = '';
  var str = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
  };
  result = str[value];
  return result;
}

console.log(printString(1));

// Testing objects for properties (hasOwnProperty method)
function checkObject(obj, property) {
  if (obj.hasOwnProperty(property)) {
    return obj[property];
  } else {
    return 'Not Found';
  }
}

console.log(checkObject(addProperties, 'salary'));

//  complex objects
var myCompany = [
  {
    name: 'WebJI',
    CEO: 'JI',
    since: 2022,
    employees: ['one', 'two', 'three'],
    Investors: true,
  },
  {
    secondArray: true,
  },
];

// Accessing nested Objects
var myCar = {
  car: {
    inside: {
      seats: 3,
      'driver seat': 1,
    },
    outside: {
      numberPlates: 2,
    },
  },
};

// accessing
var numberPlates = myCar.car.outside.numberPlates;
console.log(numberPlates);
// using bracket notation
var driverSeat = myCar.car.inside['driver seat'];
console.log(driverSeat);
