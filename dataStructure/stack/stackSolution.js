module.exports = class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    //const lastItem = this.stack[this.stack.length-1]
    //this.stack.slice[this.stack.length-2]
    // return lastItem
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
};
