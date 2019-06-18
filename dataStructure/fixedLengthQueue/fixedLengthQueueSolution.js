module.exports = class FixedLengthQueue {
  constructor(length) {
    this.queue = new Array(length);
    this.start = 0;
    this.end = 0;
    this.maxLength = length;
  }

  enqueue(item) {
    if (this.end === this.maxLength) {
      throw new Error();
    }

    this.queue[this.end++] = item;
  }

  dequeue() {
    if (this.start === this.end) {
      return undefined;
    }

    const item = this.queue[this.start];
    this.queue[this.start] = undefined;
    this.start++;
    return item;
  }

  peek() {
    return this.queue[this.start];
  }
};
