'use strict';


module.exports = new class {
  findPrimeNumbers(arg) {
    let final = [];
    for (let i = 2; i <= arg; i++) {
      if (this.checkNum(i)) {
        console.log('inside', i)
        final.push(i)
      }
    }
    return(final)
  }

  checkNum(arg) {
    for(var check = arg - 1; check >= 2; check--) {
      if(arg % check === 0) {
        return false
      }
    }
    return true;
  }
}
