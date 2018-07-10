'use strict';


module.exports = new class {
  findExtraLetter(t, s) {
    return String.fromCharCode(this.wordSum(s) - this.wordSum(t));
  }

  wordSum(word){
    let sum = 0;
    word.toLowerCase().split('').forEach(temp => {
      sum += temp.charCodeAt(0);
    });
    return sum;
  }
}
