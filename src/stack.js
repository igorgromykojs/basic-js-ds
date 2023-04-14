const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
// class Node {
//   constructor(element) {
//     this.element=element;
//     this.next=null;
//   }
// }
// class Stack {
//   constructor() {
//     this.first=null;
//     this.last=null;
//     this.size=0;
//   }

//   push(element) {
//     let newNode = new Node(element);
//     if(!this.first) {
//       this.first=newNode;
//       this.last=newNode;
//     } else {
//       let temp=this.first;
//       this.first=newNode;
//       this.first.next=temp;
//     }
//     return ++this.size;
//   }

//   pop() {
//     if(!this.first) return null;
//     let temp=this.first;
//     if (this.first === this.last){
//       this.last=null;
//     }
//     this.first=this.first.next;
//     this.size --;
//     return temp.element;
//   }

//   peek() {
//     return this.element;
//   }
// }
class Stack{
  constructor(... args ){
    this.store = [... args.reverse()];
  }
  peek(){
    return this.store[0];
  }
  push(value){
    return this.store.unshift(value);
  }
  pop(){
   return this.store.shift();
  }
}
// const q = new Stack();
// q.push(1);
// q.pop();
// console.log(q);
module.exports = {
  Stack
};
