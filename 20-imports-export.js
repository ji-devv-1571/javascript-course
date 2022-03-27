// understanding difference between import and require
import { capitalizeString } from './to-export';
const cap = capitalizeString('hello!');
console.log(cap);

// use * to import everything from a file
// importing everything from to-export.js
import * as CapitalizeString from './to-export.js';

// import a default export
import subtract from './to-export.js';
// if the module you wants to import is default export the you don't need to put curly brackets otherwise you have to
subtract(7, 6);
