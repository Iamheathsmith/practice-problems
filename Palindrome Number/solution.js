'use strict';


module.exports = new class {
  isPalindrome(x) {
    let test = x.toString().split('')

    let count = test.length - 1;

    for (let i = 0; i < test.length; i++) {
      if (i >= count) {
        return true;
      }
      if (test[i] === test[count]) {
        count--;
      } else {
        return false;
      }
    }
  }

  isPalindromeString(x) {
    let count = x.length - 1;

    for (let i = 0; i < x.length; i++) {
      if (i >= count) {
        return true;
      }

      if (x[i] === x[count]) {
        count--;
      } else {
        return false;
      }
    }
  }
}
