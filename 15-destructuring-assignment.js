let voxel = { x: 3.6, y: 5.8, z: 7.4 };

// old way
let x = voxel.x;
let y = voxel.y;
let z = voxel.z;

// new way
const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 5.8, c = 7.4

const avgTemperature = {
  today: 42.54,
  tomorrow: 41,
};

function getTemperature(avgTem) {
  'use strict';
  const { tomorrow: tempOfTomorrow } = avgTem; // this is destructuring
  // the above line is saying get 'tomorrow' from 'avgTem' and assign it to 'tempOfTomorrow'
  return tempOfTomorrow;
}

console.log(getTemperature(avgTemperature));

// destructuring assignment with nested objects

const tempForecast = {
  today: { min: 38.67, max: 49.65 },
  tomorrow: { min: 36.67, max: 42.64 },
};

function getMaxTemp(forecast) {
  ('use strict');

  const {
    tomorrow: { max: maxTemp },
  } = forecast; // this is destructuring
  // the above line is saying get 'max' of 'tomorrow'from 'forecast' and assign it to 'maxTemp'
  return maxTemp;
}

console.log(getMaxTemp(tempForecast));

// use destructuring assignment to assign variables from arrays
const [Z, X, , Y] = [1, 2, 3, 4, 5];
console.log(Z, X, Y); // it will skip 3 because of one empty comma near X

let A = [5],
  B = [6];
(() => {
  'use strict';
  [A, B] = [B, A]; // this will reverse A and B
})();
console.log(A);
console.log(B);

// use destructuring assignment with the rest operator
const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(array) {
  const [, , ...list] = array;
  return list;
}

const removeFirst2 = removeFirstTwo(sourceArray);
console.log('sourceArray with removeFirstTwo: ' + removeFirst2);
console.log('sourceArray: ' + sourceArray);

// use destructuring assignment to pass an object as an function's parameter
const stats = {
  max: 56.78,
  standardDeviation: 4.6,
  median: 34.6,
  mode: 23.56,
  min: -8.65,
  average: 32.65,
};

const half = (function () {
  /*  return function half(stats) { // without destructuring assignment
    return (stats.max + stats.min) / 2.0;
  };
  */
  return function half({ max, min }) {
    // with destructing assignment
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));
