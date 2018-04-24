'use strict';


module.exports = new class {
  spaceify(str) {
    let temp = str.split('');
    let second = temp.map(arg => arg.split(''))
    let test = second.join(' ').replace(/,/g,' ');
    return test
  }
}
