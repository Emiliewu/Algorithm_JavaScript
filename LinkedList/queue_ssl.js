

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class slStack {
//     constructor() {
//         this.top = null;
//         this.length = 0;
//     }

//     // add to top
//     push(newNode) {
//         if (this.top === null){
//             this.top = newNode;
//         } else{
//             newNode.next = this.top;
//             this.top = newNode;
//         }
//         this.length++;
//     }

//     // remove and return from top
//     pop() {
//         if (this.top === null) return null;

//         const removed = this.top;
//         this.top = this.top.next;
//         removed.next = null;
//         this.length--;
//         return removed;
//     }

//     // aka check top, return the value
//     peek() {
//         return this.top.data;
//     }

//     // check if empty, return boolean
//     isEmpty() {
//         return this.top === null;
//     }

//     // length getter, return int
//     findLength() {
//         return this.length;
//     }
    
//     // buh buh bonus challenge: totalStack
    
//     // write the standalone function totalStack
//     // given a slStack of integers, total the data values
//     // return the toal
//     // you may use one stack or array as additional storage
//     // the given stack must be returned back to it's original order
//     // you may only use public stack methods push pop peek isempty
// }

// function totalStack(stack) {
//     var newStack = new slStack();
//     var total = 0;

//     while (!stack.isEmpty()) {
//         var tempNode = stack.pop();
//         total += tempNode.data;
//         newStack.push(tempNode);
//     }
//     // add back all data from the Temp Stack to the original stack
//     while (!newStack.isEmpty()) {
//         stack.push(newStack.pop());
//     }
//     return total;
// }

// var myslStack = new slStack();

// myslStack.push(new Node(13));
// myslStack.push(new Node(14));
// myslStack.push(new Node(15));
// myslStack.push(new Node(16));
// myslStack.push(new Node(17));


// console.log(myslStack.peek());
// console.log(myslStack.pop());
// console.log(myslStack.peek());
// console.log(myslStack.isEmpty());
// console.log(myslStack.findLength());
// console.log(totalStack(myslStack));





// Queue
// FIFO (First in, first out)

class Queue {
  constructor() {
      this.front = null; // sometimes called head "front of the line"
      this.back = null; // sometimes called rear or tail "back of the line"
      this.length = 0;
  }

  // add nodes to the rear of the queue
  enqueue(node) {
      if (this.back === null){
          this.back = node;
          this.front = node;
      } else{
          this.back.next = node;
          this.back = node;
      }
      this.length++;
  }

  // remove nodes from the front of the queue
  dequeue() {
      if (this.front === null) return null;
      if (this.front === this.back) {
          this.back = null;
      }
      const removed = this.front;
      this.front = this.front.next;
      removed.next = null;
      this.length--;
      return removed;
  }

  // check the front of the queue without removing it
  peek() {
      return this.front ? this.front : null;
  }

  // return true / false if queue is empty
  isEmpty() {
      return this.front === null;

  }

  // return length
  count() {
      return this.length;
  }
}

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty, and length
function readQueue(queue) {
  var newQ = new Queue();
  while (!queue.isEmpty()) {
      var tempNode = queue.dequeue();
      console.log(tempNode.data);
      newQ.enqueue(tempNode);
  }
  while (!newQ.isEmpty()){
      queue.enqueue(newQ.dequeue());
  }
  return queue;
}

function readQueueV2(queue) {
  var length = queue.count();
  while (length) {
      var node = queue.dequeue();
      console.log(node.data);
      queue.enqueue(node);
      length--;
  }
  return queue;
}

function isPalindrom(queue) {
    var length = queue.length;
    
}



var myQ = new Queue()

console.log(myQ.isEmpty());

myQ.enqueue(new Node(11));
myQ.enqueue(new Node(12));
myQ.enqueue(new Node(13));
readQueue(myQ);
// console.log(myQ.peek());

// myQ.dequeue();

// console.log(myQ);
// console.log(myQ.peek());

// console.log(myQ.isEmpty());

// myQ.dequeue();
// myQ.dequeue();

// console.log(myQ.isEmpty());





