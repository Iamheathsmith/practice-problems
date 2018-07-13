'use strict';

const run = require('./solution');

let pattern = 'abba'
let string = 'dog cat cat dog'


console.log('does it match: ', run.checkPattern(pattern, string));
