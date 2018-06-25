'use strict';

module.exports = new class {
  findMin(nums) {
    let final = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        final = nums[i]
      }
      if (nums[i] < final) {
        final = nums[i]
      }
    }
    return final
  }
};
