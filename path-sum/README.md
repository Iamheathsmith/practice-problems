## Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

##### Note
 A leaf is a node with no children.

## Example

Given the below binary tree and sum = `22`,
```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```
return `true`, as there exist a root-to-leaf path 5->4->11->2 which sum is `22`.

### code

In this code, we need to find out if a given BinaryTree has a total path sum that adds up to a given argument. First we pass in a `BinaryTree.root` to have access to the starting `node`, we pass in the `sum` argument and we also pass in a 3rd argument called `total` which we set at `0` to start off with.

we have `if` statment that checks to see if the root is `null` and returns `false` if it is. this is used to return `false` if we did not match our `sum` argument.  Next is our variable called `temp` and we set it to the what `root.val` value and `total` added together.

Next is our 2nd `if` which checked to see if the current `node` we are at has a `root.left` and a `root.right` is set to `null` AND if the `temp` value is equal to our `sum` argument. if it is, we will return `true`.

our last part is where the fun happens.  We then call our function again `this.hasPathSum` with 3 arguements in it. we pass in our `root.left` or `root.right`, we pass in our value we are looking for called `sum` and we also pass in our `total`. this will run all of this again on top of the first run of the orignal call of the function. Now we have a call stack.

#### Call Stack

A call stack is where we an item(this case its a function) and we add it to out "cup". we then add one more item(this case the same function but its not the same). we can keep doing this again and again and so on. this is what we call a stack. one item on top of another. if you want to have the item that was entered first(bottom) finshed... we need to get all the other items on top of it completed. This of it like a stack of pancakes. if you want to eat the pancake on the bottom, you need to remove the items above it before you can finish it.

### Runtime: 68 ms
The runtime was in 78.91% catagory.


[Link to Path Sum LeetCode](https://leetcode.com/problems/path-sum/description/)

```javascript
  hasPathSum(root, sum, total=0) {
    if(root === null) return false;

    let temp = total + root.val;
    if (root.left === null && root.right === null && temp === sum) {
      return true;
    }

    return this.hasPathSum(root.left, sum, temp) || this.hasPathSum(root.right, sum, temp);
  }
  ```
