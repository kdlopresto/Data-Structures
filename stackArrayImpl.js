class Stack {
  constructor(){
    this.stack = [];
    this.top = -1;
    this.bottom = -1;
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    }
    return false;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.top];
    } else {
      return null;
    }
  }
  
  push(value){
    this.top = this.stack.push(value) - 1;
    if (this.stack.length === 1) {
      this.bottom = 0;
    }
    return this;
  }
  
  pop(){
    if (this.isEmpty()) {
      return null;
    } else {
      const tmpNode = this.stack.pop();

      if (this.top === this.bottom) {
        this.bottom = -1;
        this.top = -1;
      } else {
        this.top = this.stack.length - 1;
      }
      return tmpNode;
    }
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log("peek : " + myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log("peek : " + myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());


//Discord
//Udemy
//google