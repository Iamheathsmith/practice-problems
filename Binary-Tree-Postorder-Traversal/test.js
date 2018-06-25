
'use strict';

const Run = require('./solution');

let test = { val: 1, right:
  { val: 2,
    right: null,
    left: { val: 3, right: null, left: null } },
left: null }


console.log('answer', Run.postorderTraversal(test));
