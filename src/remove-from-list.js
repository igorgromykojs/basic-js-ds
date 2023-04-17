const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  addToTheEnd(value) {
    let node = new Node(value); //creating the node using class Node

    if (this.length === 0) {
        this.head = node; // If there are no nodes 
        // node variable will be the first and head node in the list
    } else {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        current.next = new Node(value);
    }

    this.length++;
  }
  getIndexOf(value) {
    let current = this.head; // current is a head of our list
    let index = 0; // index which will be returned

    while(current) {
        if (current.value === value) {
            return index;
        }
        
        current = current.next;
        index++;
    }

    return -1;
  }
  removeElementByValue(value) {
    return this.removeFromPosition(this.getIndexOf(value));
  }
}
const q = new LinkedList();
q.addToTheEnd(5);
q.addToTheEnd(7);
q.removeElementByValue(5);
console.log(q);

// function removeKFromList(l, k) {
//   //figure out the head of the new list so we can reference it later
//   var head = l;

//   while (head.value === k){
//       head = head.next;
//   }

//   var node = head;
//   var temp = null;

//   while (node && node !== null) {
//       if (node.next.value === k){
//           temp = node.next.next;
//           node.next.next = null;
//           node.next = temp;
//       }
//       node = node.next; 
//       console.log("+++", head);
//   }

//   console.log("---", head);  
// }



// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
// function removeKFromList(/* l, k */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
// function removeKFromList(l, k) {
//   let res = l.filter(item => item != k);
//   return res;
// }
// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));

module.exports = {
  removeKFromList
};
