class Node {
  constructor(data, next) {
    if (next && !(next instanceof Node)) {
      throw new Error("not a node");
    }
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getFirst() {
    return this.head;
  }

  unshift(newNode) {
    if (!(newNode instanceof Node)) {
      throw new Error("not a node");
    }

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.getFirst();
      this.head = newNode;
    }

    this.length += 1;
  }

  shift() {
    const itemToReturn = this.head;
    if (this.head !== null) {
      this.length -= 1;
    }
    if (this.head && this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    return itemToReturn;
  }

  getLast() {
    // check if head or head.next exist first before iterating through
    if (!this.head || !this.head.next) {
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  push(node) {
    if (!(node instanceof Node)) {
      throw new Error("not a node");
    }

    // check whether head is null first before pushing at the end
    if (this.head === null) {
      this.head = node;
      return;
    }
    const lastItem = this.getLast();
    lastItem.next = node;
    this.length += 1;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      const lastRemainingItem = this.head;
      this.length -= 1;
      this.head = null;
      return lastRemainingItem;
    }

    let curItem = this.head;
    let nextItem = this.head.next;

    while (nextItem.next) {
      curItem = nextItem;
      nextItem = nextItem.next;
    }
    curItem.next = null;
    this.length -= 1;
    return nextItem;
  }

  getAt(position) {
    if (!Number.isInteger(position)) {
      throw new Error("not a number");
    }
    if (!this.head) {
      return null;
    }
    let currItem = this.head;
    let nextItem = this.head.next;
    while (position > 0 && nextItem) {
      currItem = nextItem;
      nextItem = nextItem.next;
      position -= 1;
    }
    if (position !== 0) {
      throw new Error("index out of bound");
    }
    return currItem;
  }
  getSize() {
    return this.length;
  }
}
module.exports = { Node, LinkedList };
