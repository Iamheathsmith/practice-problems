## Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

## Example

```
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

### code


This one is faster but you have to build a temp 2d array to use this way. so its take up more space but faster.

```javascript
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
  ```

  This one is slower but you only build a temp item to hold a single number so the space it take is far less.

```javascript
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
  ```
