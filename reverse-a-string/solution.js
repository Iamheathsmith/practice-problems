'use strict';


module.exports = new class {
  reverseWords(str) {
    var newString = ' ';
    let test = str.trim().split(' ')
    for (var i = test.length - 1; i >= 0; i--) {
      if (test[i] !== '') {
        newString += test[i] + ' ';
      }
    }
    return newString.trim();
  }
}
