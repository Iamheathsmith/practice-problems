'use strict';

const run = require('./solution');

let testA = 'aA'
let testB = 'aAAbbbba'
console.log('Mine:', testA);
console.log('Check String:', testB)
console.log('Total:', run.checkString(testA, testB));
