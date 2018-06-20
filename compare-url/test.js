'use strict';

const run = require('./solution');

let test = 'http://codefellows.com/signup/now/1/a/B';
let test2 = 'http://codefellows.com;80/signup/now/1/A/b';
console.log(run.compareUrl(test, test2));
