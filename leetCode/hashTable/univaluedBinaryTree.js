// UNIVALUED BINARY TREE
// https://leetcode.com/problems/univalued-binary-tree/

// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

//       1
//     /  \
//   1      1
// /  \      \
// 1   1       1

// Input: [1,1,1,1,1,null,1]
// Output: true

//       2
//     /   \
//    2     2
//  /  \
// 5    2

// Input: [2,2,2,5,2]
// Output: false

// Note:

// The number of nodes in the given tree will be in the range [1, 100].
// Each node's value will be an integer in the range [0, 99].

// DOUG NOTES:

// - Do we need to build the tree from the given input, then traverse the tree to see
// if it is univalued?
// - Looks like I'll need to make a method to check after the tree has been created
// through a new function

// PLAN A

// - create node class
// - create tree class
// - create add method
//   - if node has no children
//     - add left
//   - if left, add right
//   - if both look right
//     - if rightnode has left and right - move left and try again
//     - else, move right and try again
// - create check method
//   - create currVal variable
//   - look at root value and assign it to currVal
//     - dig as left as you can go

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root;
  }

  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new Node(data);
      return;
    } else {
      const addChild = (node) => {
        if (node.left == null) {
          node.left = new Node(data);
        } else if (node.left != null && node.right == null) {
          node.right = new Node(data);
        } else if (node.left != null && node.right != null) {
          if (node.left.left == null || node.left.right == null) {
            return addChild(node.left);
          } else {
            return addChild(node.right);
          }
        }
      };
      return addChild(node);
    }
  }

  checkTree() {
    if (this.root == null) {
      return null;
    } else {
      var result = true;
      const traverseInOrder = (node) => {
          if (node.left != null && node.data != node.left.data || node.right != null && node.data != node.right.data) {
              result = false
          }
          if (node.left && node.data == node.left.data) {
              traverseInOrder(node.left);
          }
          if (node.right && node.data == node.right.data) {
              traverseInOrder(node.right)
          }
      };
      traverseInOrder(this.root);
      return result;
    }
  }
}

const univaluedBinaryTreeCheck = (arr) => {
  let treeCheck = new Tree();
  for (let node of arr) {
    treeCheck.add(node);
  }
  return treeCheck.checkTree();
};

// const test1 = new Tree();

// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(5)

// console.log(test1.checkTree())


console.log(univaluedBinaryTreeCheck([1, 1, 1, 1, 1, null, 1]));