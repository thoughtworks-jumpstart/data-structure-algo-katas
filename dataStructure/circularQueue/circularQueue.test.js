const CircularQueue = require('./circularQueue');

describe('Circular Queue', () => {
  it('should be able to enqueue and dequeue', () => {
    const cq = new CircularQueue(1);
    cq.enqueue('apple');
    expect(cq.dequeue()).toEqual('apple');
  });

  it('should not be able to add more if there is no empty slot in the queue', () => {
    const cq = new CircularQueue(1);
    cq.enqueue('apple');
    expect(() => cq.enqueue('banana')).toThrowError('max length reached');
  });

  it('should maintain order of enqueue and dequeue', () => {
    const cq = new CircularQueue(3);
    cq.enqueue('apple');
    cq.enqueue('banana');
    cq.enqueue('citrus');
    expect(cq.dequeue()).toEqual('apple');
    expect(cq.dequeue()).toEqual('banana');
    expect(cq.dequeue()).toEqual('citrus');
  });

  it('should be able to enqueue more than length of queue after some item dequeed', () => {
    const cq = new CircularQueue(1);
    cq.enqueue('apple');
    cq.dequeue();
    expect(() => cq.enqueue('banana')).not.toThrowError('max length reached');
    expect(cq.dequeue()).toEqual('banana');
  });

  it('should be able to peek on next item', () => {
    const cq = new CircularQueue(2);
    cq.enqueue('apple');
    expect(cq.peek()).toEqual('apple');
    cq.enqueue('banana');
    expect(cq.peek()).toEqual('apple');
  });

  it('cannot enqueue undefined', () => {
    const cq = new CircularQueue(2);
    expect(() => cq.enqueue(undefined)).toThrowError(
      'enqueue item cannot be undefined'
    );
  });
});
