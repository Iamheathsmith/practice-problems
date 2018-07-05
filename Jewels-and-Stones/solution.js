'use strict';


module.exports = new class {
  checkString(J, S) {
    let count = 0;
    for (let i = 0; i< S.length; i++) {
      if (J.indexOf(S[i]) > -1) {
        count++
      }
    }
    return count
  }
}
