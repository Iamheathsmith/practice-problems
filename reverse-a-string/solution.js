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

  reverseNumWithMath(num) {
    let reverse = 0;
    let number = num
    while (number > 0) {
      let lastDigit = number % 10;
      reverse = (reverse * 10) + lastDigit;
      number = Math.floor(number / 10);
    }
    return reverse;
  }
}
