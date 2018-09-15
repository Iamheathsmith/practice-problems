'use strict';

const run = require('./solution');

let test;
if (process.argv[2] === undefined) {
  test = 100;
} else {
  test = process.argv[2];
}
console.log(`All the primes from 0 - ${test}`, run.findPrimeNumbers(test));
