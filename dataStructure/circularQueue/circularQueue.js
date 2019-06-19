module.exports = class CircularQueue {
  constructor(lengthOfArray) {
    this.array = new Array(lengthOfArray);
  }

  enqueue(item) {}

  dequeue() {}

  peek() {}

  getSize() {
    return this.array.length;
  }
};
