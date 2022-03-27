// write concise object literals declarations using simple fields
const CreatePerson = (Name, Age) => {
  // wrong way
  return {
    name: Name,
    age: Age,
  };
};

const createPerson = (Name, Age) => ({ Name, Age }); // right way
console.log(createPerson('JI_DEvv', 15));

// write concise Declarative Functions
// an object can contain a function
// this is a long way to put function in a object
const Bicycle = {
  gear: 2,
  setgear: function (newgear) {
    'use strict';
    this.gear = newgear;
  },
};
// this is the short way
const bicycle = {
  gear: 2,
  setGear(newGear) {
    'use strict';
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);
