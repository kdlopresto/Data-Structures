class Stack {
  constructor(){
    this.stack = [];
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    }
    return false;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    } else {
      return null;
    }
  }
  
  push(value){
    this.stack.push(value);
    return this;
  }
  
  pop(){
    const tmpNode = this.stack.pop();
    return tmpNode;
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