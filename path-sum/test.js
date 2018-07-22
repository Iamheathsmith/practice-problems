'use strict';

const Run = require('./solution');
const Build = require('./binaryTree');
const TreeNode = require('./treeNode')


let five = new TreeNode(5);
let four = new TreeNode(4);
let eight = new TreeNode(8);
let eleven = new TreeNode(11);
let thirteen = new TreeNode(13);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let two = new TreeNode(2);
let one = new TreeNode(1);

let binaryTree = new Build();
binaryTree.root = five;

five.left = four;
five.right = eight;
four.left = eleven;
eleven.left = seven;
eleven.right = two;
eight.right = thirteen;
eight.left = six;
six.right = one;


console.log('answer', Run.hasPathSum(binaryTree.root, 23));
