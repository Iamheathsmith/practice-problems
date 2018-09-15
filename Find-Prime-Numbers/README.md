## Fine Prime Numbers
Given a numbers, Return all numbers that are prime numbers.

## Example

```javascript
Input: 10
Output: [ 2, 3, 5, 7 ]
```

```javascript
Input: 50
Output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
```

### Code

in this code, We run a `for` loop from 2 to the `arg` and at each index, we pass that into a helper function called `checkNum()`.

Here we do a `for` loop going backwards from the index that was passed into it(if i pass in `9`, it will start at `8`) and we call this new number the `check`. We do this all the way down to `2`. At each index, we have a `if` statment that we check to see main if the `arg` can be `%` by the `check` and if we have the return of `0`. the number is not prime and we return `false` and break out of it. If we never get into the `if` statment that is looking for, we just return `true`

back in the main function, we have a `if` statment that is looking for a `true` or `false` from the helper function. If its `true`, we add that index to the `final` array. If it returns `false`, we never get into the `if` statment.

at the end of the `for` loop in the main function, we return the `final` array.

## How to run

Run `node test.js` plus `some number` and it will run the function with the number that you added in as the test case.


```javascript
 findPrimeNumbers(arg) {
    let final = [];
    for (let i = 2; i <= arg; i++) {
      if (this.checkNum(i)) {
        final.push(i)
      }
    }
    return(final)
  }

  checkNum(arg) {
    for(var check = arg - 1; check >= 2; check--) {
      if(arg % check === 0) {
        return false
      }
    }
    return true;
  }
  ```
