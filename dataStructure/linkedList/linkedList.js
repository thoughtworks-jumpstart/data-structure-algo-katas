class Node {
  constructor(data, next) {
    if (next !== null && next !== undefined && !(next instanceof Node)) {
      throw new Error('not a node');
    }
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  unshift(node) {
    if (!(node instanceof Node)) {
      throw new Error('not a node');
    }
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  shift() {
    const itemToReturn = this.head;
    if (this.head && this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }

    return itemToReturn;
  }

  getLast() {
    if (!this.head || !this.head.next) {
      return this.head;
    }
    let curItem = this.head;
    while (curItem.next) {
      curItem = curItem.next;
    }

    return curItem;
  }

  push(node) {
    if (!(node instanceof Node)) {
      throw new Error('not a node');
    }
    if (this.head === null) {
      this.head = node;
      return;
    }

    const lastItem = this.getLast();
    lastItem.next = node;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      const lastItem = this.head;
      this.head = null;
      return lastItem;
    }

    let curItem = this.head;
    let nextItem = this.head.next;

    while (nextItem.next) {
      curItem = nextItem;
      nextItem = nextItem.next;
    }
    curItem.next = null;
    return nextItem;
  }

  getSize() {
    if (!this.head) {
      return 0;
    } else if (!this.head.next) {
      return 1;
    }
    let count = 1;
    let curItem = this.head;
    while (curItem.next) {
      count++;
      curItem = curItem.next;
    }
    return count;
  }

  getAt(n) {
    if (isNaN(n)) {
      throw new Error('not a number');
    } else if (n < 0) {
      throw new Error('index out of bound');
    }
    let curItem = this.head;
    for (let i = 0; i < n; i++) {
      if (curItem && curItem.next) {
        curItem = curItem.next;
      } else {
        throw new Error('index out of bound');
      }
    }
    return curItem;
  }

  insertAt(n, node) {
    if (isNaN(n)) {
      throw new Error('not a number');
    } else if (!(node instanceof Node)) {
      throw new Error('not a node');
    } else if (n === 0) {
      this.unshift(node);
    } else {
      let item = this.getAt(n - 1);
      if (!item) {
        throw new Error('index out of bound');
      }
      let nextItem = item.next;
      item.next = node;
      node.next = nextItem;
    }
  }

  removeAt(n) {
    if (isNaN(n)) {
      throw new Error('not a number');
    } else if (n === 0) {
      const item = this.head;
      if (this.head && this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
      return item;
    } else {
      const previousItem = this.getAt(n - 1);
      if (!previousItem || !previousItem.next) {
        throw new Error('index out of bound');
      }
      const itemToReturn = previousItem.next;
      previousItem.next = itemToReturn.next;
      return itemToReturn;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};
