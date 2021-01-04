class QueueFromStacks {

  constructor() {
    this.primary = [];
    this.secondary = [];
  }

  enqueue(value) {
    const length = this.primary.length;
    for(let i=0; i < length; i++) {
      this.secondary.push(this.primary.pop());
    }
    this.secondary.push(value);
    return this;
  }

  dequeue() {
    const length = this.secondary.length;
    for(let i=0; i < length; i++) {
      this.primary.push(this.secondary.pop());
    }
    const tmpNode = this.primary.pop();
    return tmpNode;
  }

  peek() {
    if (this.secondary.length > 0) {
      return this.secondary[0];
    }
    return this.primary[this.primary.length - 1];
  }
}

const myQueue = new QueueFromStacks();

myQueue.enqueue("matt");
myQueue.enqueue("prajwal");
myQueue.enqueue("dan");
myQueue.enqueue("venu");
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());