'use strict';


module.exports = new class {
  hasPathSum(root, sum, total=0) {
    console.log('new search: ', root.val )
    if(root === null) return null;
    let temp = total + root.val

    console.log('temp', temp)
    if (root.left === null && root.right === null && temp === sum) {
      console.log('inside', root.val)
      return true
    }

    if (root.left !== null) {
      console.log('running left', root.val)
      this.hasPathSum(root.left, sum, temp);
    }

    if (root.right !== null) {
      console.log('running right', root.val)
      this.hasPathSum(root.right, sum, temp);
    }
    return false;
  }
}
