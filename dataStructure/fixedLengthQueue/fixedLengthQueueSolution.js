module.exports = class FixedLengthQueue {
  constructor(length) {
    this.array = new Array(length);
    this.toInsert = 0;
    this.toDequeue = 0;
    this.length = length;
  }

  enqueue(item) {
    if (this.toInsert >= this.length) {
      throw new Error('max reached');
    }
    this.array[this.toInsert] = item;
    this.toInsert++;
  }

  dequeue() {
    if (this.toDequeue < this.toInsert) {
      return this.array[this.toDequeue++];
    }
  }

  peek() {
    if (this.toDequeue < this.toInsert) {
      console.log(this.Dequeue);
      return this.array[this.toDequeue];
    }
  }

  getSize() {
    return this.array.length;
  }
};
