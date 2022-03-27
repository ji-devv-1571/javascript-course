// use getters and setters to control access to an object
class book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updateAuthor) {
    this._author = updateAuthor;
  }
}

// convert ferrite to celsius
const makeClass = () => {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32); // the variables with underscore'_' are declared as private
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemperature) {
      this._temp = updatedTemperature;
    }
  }
  return Thermostat;
};

const thermostat = makeClass();
const thermos = new thermostat(56);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);