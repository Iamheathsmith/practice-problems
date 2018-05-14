## Palindrome
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

### code

```javascript
isPalindrome(x) {
    let test = x.toString().split('')

    let count = test.length - 1;

    for (let i = 0; i < test.length; i++) {
      if (i >= count) {
        return true;
      }
      if (test[i] === test[count]) {
        count--;
      } else {
        return false;
      }
    }
  }
  ```


done with out spliting it into a array
  ```javascript
  isPalindromeString(x) {
    let count = x.length - 1;

    for (let i = 0; i < x.length; i++) {
      if (i >= count) {
        return true;
      }

      if (x[i] === x[count]) {
        count--;
      } else {
        return false;
      }
    }
  }
  ```
