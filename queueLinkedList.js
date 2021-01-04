class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.head;
    } else {
      return null;
    }
  }
  
  enqueue(value){
    let newNode = new Node(value);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  dequeue(){
    if (this.isEmpty()) {
      return null;
    }

    let tmpNode = this.head;
    this.head = this.head.next;
    tmpNode.next = null;
    this.length--;

    if (this.head === null) {
      this.tail = this.head;
    } 

    return tmpNode;
  }
}

const myQueue = new Queue();

myQueue.enqueue("matt");
myQueue.enqueue("prajwal");
//myQueue.enqueue("dan");
//myQueue.enqueue("venu");
//console.log(myQueue.peek());
//console.log(myQueue.dequeue());
//console.log(myQueue.dequeue());
//console.log(myQueue);
//console.log(myQueue.dequeue());
//console.log(myQueue.dequeue());


//Discord
//Udemy
//google