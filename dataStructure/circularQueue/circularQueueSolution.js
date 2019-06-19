module.exports = class CircularQueue {
  constructor(lengthOfArray) {
    if (!lengthOfArray || typeof lengthOfArray !== 'number') {
      throw new Error();
    }

    this.array = new Array(lengthOfArray);
    this.start = 0; // the next index to dequeue
    this.end = 0; // the next index to enqueue
    this.maxLength = lengthOfArray; // the max length that can be enqueue
  }

  enqueue(item) {
    if (item === undefined) {
      throw new Error('enqueue item cannot be undefined');
    }

    if (this.array[this.end] !== undefined) {
      throw new Error('max length reached');
    }

    this.array[this.end++] = item;
    if (this.end > this.maxLength - 1) {
      this.end = 0;
    }
  }

  dequeue() {
    if (this.array[this.start] === undefined) {
      throw new Error('no item in queue');
    }

    const out = this.array[this.start];
    this.array[this.start] = undefined;
    this.start++;
    if (this.start > this.maxLength - 1) {
      this.start = 0;
    }
    return out;
  }

  peek() {
    return this.array[this.start];
  }
};
