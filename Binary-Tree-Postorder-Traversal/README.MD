## Binary Tree Postorder Traversal
### Level - Hard

Given a binary tree, return the postorder traversal of its nodes' values.

## Example

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
```

### code

In this code, We pass in the root of the Binary Tree and a variable to hold our values. we have two if statements that checks for a empty BT and one more to to check if anything was passed in.  After that we take the value of the node and place it in the front of the array called `inOrd` and then we go to the right leaf. we then add that value to the varible `inOrd` and keep going right. once we get to a leaf that has no children, we go back up on level and go left and add that value. we keep doing it till there is nothing left and we then return the `inOrd` variable.

this is in the 100% fastest ways to solve this on Leetcode.

https://leetcode.com/problems/binary-tree-postorder-traversal/description/


```javascript
  postorderTraversal(root, inOrd=[]) {
    if(!root) return [];
    if(root === null) return null;
    inOrd.unshift(root.val);
    this.postorderTraversal(root.right, inOrd);
    this.postorderTraversal(root.left, inOrd);
    return inOrd;
  }
  ```
