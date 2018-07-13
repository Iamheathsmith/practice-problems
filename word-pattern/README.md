## Word Pattern

Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `str`.


## Examples

Example 1:
```javascript
Input: pattern = "abba", str = "dog cat cat dog"
Output: true
```

Example 2:
```javascript
Input: pattern = "abba", str = "dog cat cat fish"
Output: false
```

Example 3:
```javascript
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
```

Example 4:
```javascript
Input: pattern = "abba", str = "dog dog dog dog"
Output: false
```
## Note

You may assume `pattern` contains only lowercase letters, and `str` contains lowercase letters separated by a single space.

### code

In this problem, we are given a string of letters that is the `pattern` that we are going to follow. If the `pattern` is 'abba' then the frist and the 4th word need to be the same and the 2nd and 3rd also need to be the same. We then take the `str` and we split it into a array with each word by itself. We also build a javaScript `Set()` and we also build a object called `hash`. we will use these to store our items and check them aginst each other.  We check to see if both arguments are the same size, if not we just return `false`. then we start a `for loop` that will go just the length of the `str`.  if there is no `property` with the index, we go into the frist `if`. the next `if` checks to see if has been added to the `set()`, if it has then the `pattern` and `str` are different and return `false`.

if it pass the frist `if` and fails the 2nd `if`, we then add the `pattern` index item to the `used` and then set a `property` on the `hash` of the key of `pattern` index and value of `str` index. It will keep doing this as long as there is new and different `pattern` index to set in then `hash` object and the corresponding index of `str` has not been set in `used`.

if the `pattern` index has been seen before, we go the `else if` and checks to see if the `hash` `property` does not match `str` index. if that does not match, we return `false`. if it finish the `for loop`, it will then return `true`


### Runtime: 48 ms
The runtime was in 100% catagory.


[Link to Word Pattern LeetCode](https://leetcode.com/problems/word-pattern/description/)

```javascript
   checkPattern(pattern, str) {
    const used = new Set();
    const hash = {};
    const arr = str.split(' ');

    if (arr.length !== pattern.length) {
      return false;
    }

    for (let i = 0; i < pattern.length; i++) {
      if (!hash[pattern[i]]) {

        if (used.has(arr[i])) {
          return false;
        }

        used.add(arr[i]);
        hash[pattern[i]] = arr[i];

      } else if (hash[pattern[i]] !== arr[i]) {
        return false;
      }

    }
    return true;
  }
  ```
