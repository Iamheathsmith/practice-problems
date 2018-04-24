'use strict';


module.exports = new class {
  dailyTemperatures(temp) {
    let final = new Array(temp.length)
    final.fill(0)

    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[j] > temp[i]) {
          final[i] = j - i;
          break;
        }
      }
    }
    return final
  }
}
