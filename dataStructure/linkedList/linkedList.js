class Node {
  constructor(data, next) {
    throw new Error("not a node");
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getFirst() {}

  unshift(newNode) {
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.getFirst();
      this.head = newNode;
    }
  }

  shift() {}

  getLast() {}

  push(node) {}

  pop() {}
}
module.exports = { Node, LinkedList };
