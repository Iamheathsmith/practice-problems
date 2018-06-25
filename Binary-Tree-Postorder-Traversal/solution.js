'use strict';

module.exports = new class {
  postorderTraversal(root, inOrd=[]) {
    if(!root) return [];
    if(root === null) return null;
    inOrd.unshift(root.val);
    this.postorderTraversal(root.right, inOrd);
    this.postorderTraversal(root.left, inOrd);
    return inOrd;
  }
};
