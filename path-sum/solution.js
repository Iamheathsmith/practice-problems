'use strict';


module.exports = new class {
  hasPathSum(root, sum, total=0) {
    if(root === null) return false;

    let temp = total + root.val;
    if (root.left === null && root.right === null && temp === sum) {
      return true;
    }

    return this.hasPathSum(root.left, sum, temp) || this.hasPathSum(root.right, sum, temp);
  }
}
