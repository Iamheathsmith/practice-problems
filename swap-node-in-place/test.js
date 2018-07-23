'use strict';

const run = require('./solution');
const Sll = require('./sll');

let sll = new Sll();
sll.insertEnd(1)
sll.insertEnd(2)
sll.insertEnd(3)
sll.insertEnd(4)


console.log('swap in place', run.swapPairs(sll.head));
