class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
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
      return this.top;
    } else {
      return null;
    }
  }
  
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    if (this.length === 0){
      this.bottom = this.top;
    }
    this.length++;
    return this;
  }
  
  pop(){
    if (this.isEmpty()) {
      return null;
    }
    if (this.top === this.bottom) {
      // pop-ing last item.  set bottom = null
      // top will be set to null in code following this block
      this.bottom = null;
    }
    let tmpNode = this.top;
    this.top = tmpNode.next;
    tmpNode.next = null;
    this.length--;

    return tmpNode;
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());


//Discord
//Udemy
//google