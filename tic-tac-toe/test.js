'use strict';

const run = require('./solution');

const grid = [
  ['x', 'o', 'x'],
  ['o', 'x', ''],
  ['x', 'o', 'x']
]

const grid2 = [
  ['x', 'x', 'x','x'],
  ['', 'o', 'o', 'x'],
  ['o', 'o', 'o','x'],
  ['o', 'o', '','o']
]
const gridFail = [
  ['x', 'x', 'x','x'],
  ['', 'o', 'o', 'x'],
  ['o', 'o', 'o','x']
]


console.log('test for 4x4', run.checkWinner(grid2));
console.log('test for 3x3', run.checkWinner(grid));
console.log('test for 3x3', run.checkWinner(gridFail));
