'use strict';

const run = require('./solution');
const Sll = require('./sll');

let sll = new Sll();
sll.insertEnd(1)
sll.insertEnd(2)
sll.insertEnd(3)
// sll.insertEnd(9)

let sll1 = new Sll();
sll1.insertEnd(4)
sll1.insertEnd(5)
sll1.insertEnd(6)
sll1.insertEnd(7)


console.log('zipped together', run.zipTwoSLL(sll.head, sll1.head));
