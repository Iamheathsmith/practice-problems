## Jewels and Stones
You're given strings `J` representing the types of stones that are jewels, and S representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S`are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

Note:

`S` and `J` will consist of letters and have length at most 50.
The characters in `J` are distinct.

## Example

```javascript
Input: J = "aA", S = "aAAbbbb"
Output: 3
```

```javascript
Input: J = "z", S = "ZZ"
Output: 0
```

### code

in this code, we do not do a `.split('')` to turn the strings into an array but keep them as a string and use `indexOf` to look at each item of the string and compare it to the other. We set up a counter to hold the number of times we see the matching items in the 2 strings. Since `indexOf` checks the 2nd string for any matching items and it case sensitive, this is a better way to attach this issue. `indexOf` returns a `-1` if the item is not found so we just need to have a if statment that increments up the `count` for anything that is greater than `-1`

### Runtime: 56 ms
The runtime was in 99.78% catagory.

I did do this with a double for loop to see how fast the runtime was and it was in the 30.12% catagroy and 80 ms.


[Link to Jewels and Stones LeetCode](https://leetcode.com/problems/jewels-and-stones/description/)

```javascript
 checkString(J, S) {
    let count = 0;
    for (let i = 0; i< S.length; i++) {
      if (J.indexOf(S[i]) > -1) {
        count++
      }
    }
    return count
  }
  ```
