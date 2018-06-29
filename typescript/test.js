'use strict';

const Run = require('./solution');

let test =  new Run.BankAccount(10);
let test2 =  new Run.CheckingAccount(10);
console.log('test next', test.deposit(6));
console.log('remove', test2.writeCheck(4));
