'use strict';


module.exports = new class {
  customSortString(S, T) {
    let temp = [];
    let newT = T.split('')
    for (let i in S) {
      for (let y = newT.length; y >= 0; y--) {
        if (S[i] === newT[y]) {
          temp.push(S[i]);
          newT.splice(y, 1)
        }
      }
    }
    let final = temp.concat(newT).join('').toString()
    return final
  }
}
