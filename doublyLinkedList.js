// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let nodeCnt = 0;
    let curNode = this.head;
    while (nodeCnt < index) {
      curNode = curNode.next;
      nodeCnt++;
    }
    return curNode;
  }

  insert(index, value) {
    if (index < 0) {
      console.log("Invalid index value : " + index + " specified");
      return this;
    } else if (index === 0) {
      this.prepend(value);
      return this.printList();
    } else if (index >= this.length) {
      this.append(value);
      return this.printList();
    } else {
      const newNode = new Node(value);
      const tgtNode = this.traverseToIndex(index - 1);
      newNode.next = tgtNode.next;
      newNode.prev = tgtNode;
      tgtNode.next = newNode;
      newNode.next.prev = newNode;
      this.length++;
      return this.printList();
    }
  }

  removeByIndex(index) {
    if (index < 0 || index > this.length) {
      console.log("Invalid index value : " + index + " specified");
      return this;
    } else if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      const ldrNode = this.traverseToIndex(index - 1);
      const unwantedNode = ldrNode.next;
      ldrNode.next = unwantedNode.next;
      ldrNode.next.prev = ldrNode;
    }
    this.length--;
    return this.printList();
  }

  removeByValue(value) {
    let curNode = this.head;
    let preNode = null;
    if (this.length === 0) {
      console.log("List is empty");
      return this;
    } else {
      while (curNode != null) {
        if (curNode.value === value) {
          if (preNode === null) {
            this.head = curNode.next;
            this.prev = null;
            this.length--;
            return this.printList();
          } else {
            preNode.next = curNode.next;
            curNode.next.prev = preNode;
            this.length--;
            return this.printList();
          }
        } else {
          preNode = curNode;
          curNode = curNode.next;
        }
      }
      console.log("Value : " + value + " not found!");
      return this;
    }
  }

  printList() {
    const listArray = [];
    let curNode = this.head;
    while (curNode !== null) {
      listArray.push(curNode.value);
      curNode = curNode.next;
    }
    return listArray;
  }

  printListFromTail() {
    const listArray = [];
    let curNode = this.tail;
    while (curNode !== null) {
      listArray.push(curNode.value);
      curNode = curNode.prev;
    }
    return listArray;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 23);
myLinkedList.insert(0, 11);
myLinkedList.insert(5, 99);
myLinkedList.insert(9, 101);
myLinkedList.insert(-1, 59);
myLinkedList.insert(3, 57);
console.log(myLinkedList.printList());
myLinkedList.removeByValue(23);
myLinkedList.removeByValue(666);
myLinkedList.removeByIndex(0);
myLinkedList.removeByIndex(666);
myLinkedList.removeByIndex(2);
console.log(myLinkedList.printList());

