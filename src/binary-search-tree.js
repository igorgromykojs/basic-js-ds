const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.ro = null;
  }

  root() {
    return this.ro;
  }

  add(data) {
    this.ro = addWithin(this.ro, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.ro, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
      searchWithin(node.left, data):
      searchWithin(node.right, data);
    }
  }

  find(data) {
    function magic(currentNode) {
      if (currentNode == null)
        return null;
      if (currentNode.data == data)
        return currentNode;
      else if (currentNode.data > data)
          return magic(currentNode.left);
        else
          return magic(currentNode.right);
    }
    return magic(this.ro);
  }

  remove(data) {
    this.ro = removeNode(this.ro, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.ro) {
      return;
    }
    let node = this.ro;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.ro) {
      return;
    }
    let node = this.ro;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}
// const BST = new BinarySearchTree();
// BST.add(7);
// BST.add(9);
// // BST.root();
// console.log(BST.rootShow());

// class BinarySearchTree {

//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

module.exports = {
  BinarySearchTree
};