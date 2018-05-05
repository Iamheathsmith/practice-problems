'use strict';

const run = require('./solution');

let test = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

let test1 = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]
console.log('starting', test);
console.log('ending', run.rotate(test));
console.log('ending plus build', run.rotatePlusBuild(test1));
