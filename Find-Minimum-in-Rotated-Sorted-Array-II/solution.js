'use strict';


module.exports = new class {
  rotate(arr) {
    let size = arr.length
    let lastRow = arr.length -1;
    let lastColumn = arr.length -1;
    let runTime = Math.floor(size / 2)

    //counters
    let lastItem = arr.length -1;
    let count = 0;
    let totalRun = 0;

    //check if odd
    if (size % 2 !== 0) {
      size = size - 1;
    }


    while(totalRun < runTime) {

      //rotate TL -> BL
      let temp = arr[0 + totalRun][count + totalRun] //TL
      arr[0 + totalRun][count + totalRun] = arr[lastItem - totalRun][0 + totalRun]; //TL becomes BL
      arr[lastItem - totalRun][0 + totalRun] = temp; //BL becomes TL

      //rotate BL -> BR
      temp = arr[lastItem - totalRun][0 + totalRun] //BL
      arr[lastItem - totalRun][0 + totalRun] = arr[lastRow - totalRun][lastItem - totalRun]; //BL becomes BR
      arr[lastRow - totalRun][lastItem - totalRun] = temp; //BR becomes BL

      //rotate BR -> TR
      temp = arr[count + totalRun][lastColumn - totalRun]; //BR
      arr[count + totalRun][lastColumn - totalRun] = arr[lastRow - totalRun][lastItem - totalRun]; //BR becomes TR
      arr[lastRow - totalRun][lastItem - totalRun] = temp

      count++
      lastItem--


      if (lastItem - totalRun === 0 || lastItem - totalRun === totalRun) {
        totalRun++
        lastItem = arr.length -1;
        count = 0;
      }
    }
    return arr
  }

  rotatePlusBuild(matrix) {
    let len = matrix.length
    let tmp = [];

    for (let i = 0; i < len; i++) {
      tmp[i] = [];
      for (let j = 0; j < len; j++) {
        tmp[i][j] = matrix[i][j];
      }
    }

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        matrix[i][j] = tmp[len - j - 1][i];
      }
    }
    return matrix;
  }

}
