## Move Zeroes

Given an array `nums`, write a function to move all `0's` to the end of it while maintaining the relative order of the non-zero elements.

Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

## Example

```javascript
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

### code

in this code we use a for loop counting backwards to look at each index. If it finds a `0` we then set it as a temp item, then remove it with a `splice` and then use `push` to insert it back in at the end of the array.


### Runtime: 64 ms
The runtime was in 98.84% catagory.


[Link to 283: Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)

```javascript
  moveZero(nums) {
    for (let i = nums.length; i >= 0; i--) {
      if (nums[i] === 0) {
        let temp = nums[i]
        nums.splice(i,1)
        nums.push(temp)
      }
    }
  }
  ```
