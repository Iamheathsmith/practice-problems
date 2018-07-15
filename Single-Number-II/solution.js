'use strict';


module.exports = new class {
  checkNum2(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] in map) {
        map[nums[i]]++
      } else {
        map[nums[i]]=1
      }

      if (map[nums[i]] === 3) {
        delete map[nums[i]]
      }

    }
    let final = Object.keys(map)
    return parseInt(final[0])
  }
}
