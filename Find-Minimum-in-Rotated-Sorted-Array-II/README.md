## Find Minimum in Rotated Sorted Array II
### Level - Hard

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

## Example 1

```
Input: [1,3,5]
Output: 1
```

## Example 2

```
Input: [2,2,2,0,1]
Output: 0
```

### code

in this code, we create a holder variable to store the frist index of the array. after that we do a for loop to iterate over the items. If the index of the item meet the if statement, we reset the holder variable to that index value. when it is complete, we return the holder variable.


this is in the 100% fastest ways to solve this on Leetcode.

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/


```javascript
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
  ```
