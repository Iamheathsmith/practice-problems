## Reverse Words in a String

Given an input string, reverse the string word by word.

## Example

```
Input: "the sky is blue",
Output: "blue is sky the".
```

### code

This code just trims off the dead space, then splits the words into a array, then we use a for loop to iterate backwards to do a reverse without using a `reverse()`. then we check to make sure that we only add items into the new string that are not empty space like `test   case` and we return the string and i put a .trim() just in case some extra item was left at the end.

```javascript
  reverseWords(str) {
    var newString = ' ';
    let test = str.trim().split(' ')
    for (var i = test.length - 1; i >= 0; i--) {
      if (test[i] !== '') {
        newString += test[i] + ' ';
      }
    }
    return newString.trim();
  }
  ```

This is one of the fastest ways to do it in javaScrpit


## UPDATE

Here is the code to reverse a number doing it Mathematically

```javascript
  reverseWordsWithMath(num) {
    let reverse = 0;
    let number = num
    while (number > 0) {
      let lastDigit = number % 10;
      reverse = (reverse * 10) + lastDigit;
      number = Math.floor(number / 10);
    }
    return reverse;
  }
```
