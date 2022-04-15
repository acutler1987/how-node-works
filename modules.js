// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const Calc = require('./test-module-one');
const calcOne = new Calc();
console.log(calcOne.multiply(5, 9));

//exports
// const calcTwo = require('./test-module-two');, OR
const { add, subtract, multiply, divide } = require('./test-module-two');

console.log(divide(64, 4));

// caching
require('./test-module-three')();
require('./test-module-three')();
require('./test-module-three')();
