'use strict';

let add = function(a, b) {
  let final = '';
  let added = 0;
  let newA = a.split('')
  let newB = b.split('')

  while(newA.length || newB.length || added) {
    let tempA = newA.pop();
    let tempB = newB.pop();

    if (tempA === undefined) {
      tempA = 0;
    }

    if (tempB === undefined) {
      tempB = 0;
    }

    added += eval(tempA) + eval(tempB)
    final = added % 10 + final;
    if(added > 9) {
      added = 1
    } else {
      added = 0;
    }

  }
  return final;
};
