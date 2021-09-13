// DLLNodes have a .next and .prev
class DLLNode {
  constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
  }
}

// DLLists have both a .head and .tail pointer
class DLList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  // == Main Methods ==
  prepend(target, node) {
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    }
    let runner = this.head;
      if(target === this.head.data) {
        this.addHead(node);
        return node.data;
      }
      while(runner) {
        if(runner.data === target) {
          console.log("runner.data ->", runner.data);
          console.log("target ->", target);
          
          //target node prev ---> node
          runner.prev.next = node
          node.prev = runner.prev;
          node.next = runner;
          runner.prev = node;
          this.length++;
          return node.data;

          // 
          
        }
        runner = runner.next;
      }
  }

  // push to head
  addHead(node) {

    if (!this.head) { // empty list
      this.head = node;
      this.tail = node;
  } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
  }
  this.length++;
  }

  // pop from tail
  removeTail() {
    if(this.head == null && this.tail == null) {
      console.log("The list is empty");
      return null;
    }
    if(this.head != null && this.head == this.tail) {
      let ret = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return ret;
    }
    let ret = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;

    return ret;
  }

  // return is empty
  isEmpty() {
    if(this.head == this.tail && this.head == null) {
      return true;
    } else {
      return false;
    }
  }

  // return length
  size() {
    return this.length;
  }

  // == Bonus Methods, just inverted versions of the first set ==

  // push to tail
  addTail(node) {
    if(this.head == null && this.tail == null) {
      this.head = node;
      this.tail = node;
      this.head.prev = null;
      this.tail.next = null;
    }
    // if(this.head != null && this.head == this.tail) {
    //   this.head.next = node;
    //   this.tail = node;
    //   this.tail.prev = this.head;
    //   this.tail.next = null;
    // }
    this.node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.tail.next = null;

  }

  // pop from head
  removeHead() {
    // if(this.head == null && this.tail == null) {
    //   console.log("The list is empty");
    //   return null;
    // }
    // if(this.head != null && this.head == this.tail) {
    //   let ret = this.head;
    //   this.head = null;
    //   this.tail = null;
    //   this.length--;
    //   return ret;
    // }
    // let ret = this.head;
    // this.head = this.head.next;
    // this.head.prev = null;
    // this.length--;

    // return ret;
    if (this.head == null) return; // empty list
    if (this.head === this.tail) { // one node
        var temp = this.tail; // set a temp
        this.head = null; // disconnect the head
        this.tail = null; // disconnect the tail
        this.length--; // decrement
        return temp;
    }
    var temp = this.tail; // set a temp
    this.tail = tail.prev; // move the tail back
    this.tail.next = null; // null out the new tail's next
    temp.prev = null; // null out the temp's prev
    this.length--; // decrement
    return temp;
  }
}



let dll1 = new DLList();
let node1 = new DLLNode(1);
let node2 = new DLLNode(2);
let node3 = new DLLNode(3);

console.log(dll1.addHead(new DLLNode(1)));
console.log(dll1.addHead(new DLLNode(3)));
console.log(dll1.addHead(new DLLNode(2)));
console.log(dll1.removeTail());
console.log(dll1.addHead(new DLLNode(4)));
console.log(dll1.size());
console.log(dll1.addHead(new DLLNode(10)));
console.log(dll1.size());
console.log(dll1.addHead(new DLLNode(11)));
console.log(dll1.removeTail());
console.log(dll1.removeTail());
console.log(dll1.size()); // 1
console.log(dll1.isEmpty());
console.log(dll1.prepend(2, node3));
console.log(dll1.size());
console.log(dll1);