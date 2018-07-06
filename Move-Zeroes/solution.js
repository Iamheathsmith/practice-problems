'use strict';


module.exports = new class {
  moveZero(nums) {
    for (let i = nums.length; i >= 0; i--) {
      if (nums[i] === 0) {
        let temp = nums[i]
        nums.splice(i,1)
        nums.push(temp)
      }
    }
    return nums;
  }
}
