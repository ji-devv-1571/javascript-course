// use class syntax to define a constructor function

// old way to create an object constructor without class syntax
let SpaceShuttle = function (target) {
  this.target = target;
};
let Mercury = new SpaceShuttle('Mercury');

// class syntax replaces the constructor function creation
// new way to create an object constructor with class syntax
class spaceShuttle {
  constructor(target) {
    this.target = target;
  }
}
let venus = new spaceShuttle('Venus');

// class syntax in a function with variables
const makeClass = () => {
  class vegetable {
    constructor(Name) {
      this.Name = Name;
    }
  }
  return vegetable;
};

const Vegetable = makeClass();
const carrot = new Vegetable('Carrot');
console.log(carrot.Name);
