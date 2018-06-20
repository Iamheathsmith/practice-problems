'use strict';

const run = require('./solution');
const Sll = require('./sll');

let sll = new Sll();
sll.insertEnd(1)
sll.insertEnd(2)
sll.insertEnd(3)
sll.insertEnd(4)
sll.insertEnd(5)


console.log('ending plus build', run.rotateSLL(sll.head, 2004));
