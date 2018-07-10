'use strict';

const run = require('./solution');

let testA = 'abcd'
let testB = 'abcde'

console.log('extra letter is: ', run.findExtraLetter(testA, testB));
