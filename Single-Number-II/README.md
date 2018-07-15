## Single Number II

Given a `non-empty` array of `integers`, every element appears `three times` except for `one`, which appears exactly once. Find that single `one`.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

## Example

```javascript
Input: [2,2,3,2]
Output: 3
```

```javascript
Input: [0,1,0,1,0,1,99]
Output: 99
```

### code

in this code, we make a object that we will store the `number` seen in the `array` as a `key` and set the `value` to how many times it has been seen. Next we have a `for loop` that will run thought array. At our first `if`, we try and place a new Key/Value pair in the object and if it already exists, we hit our `else` and just add `1` to the exisiting value. if it does not exist, we set it in the object with a starting value of `1`. the 2nd `if` is where we remove all items that have a total amount seen of `3`. Now we only have 1 Key/Value pair in the Object and we then use `Object.key()` to get the `number` but its in a `array` of `strings` so we use `parseInt` of `array` at the `0` index.


### Runtime: 56 ms
The runtime was in 97.71% catagory.


[Link to Single Number II LeetCode](https://leetcode.com/problems/single-number-ii/description/)

```javascript
 checkNum2(nums) {
    let map = {}
    for (i = 0; i < nums.length; i++) {
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
  ```
