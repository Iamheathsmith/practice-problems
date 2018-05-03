'use strict';

const Run = require('./solution');

let test = 'The quick brown fox jumped over the lazy dog. The lazy dog, peeved to be labeled lazy, jumped over a snoring turtle. In retaliation the quick brown fox jumped over ten snoring turtles.Then the quick brown fox refueled with some ice cream.';

let doIt = new Run(test)
console.log(doIt.commonPhrase());
