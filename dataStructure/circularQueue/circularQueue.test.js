const CircularQueue = require('./circularQueue');

describe('Circular Queue', () => {
  it('should create an queue of size of length pass to constuctor', () => {
    const cq = new CircularQueue(3);
    expect(cq.getSize()).toEqual(3);
  });

  it('should be able to enqueue and dequeue', () => {
    const cq = new CircularQueue(1);
    cq.enqueue('apple');
    expect(cq.dequeue()).toEqual('apple');
    expect(cq.getSize()).toEqual(1);
  });

  it('should not be able to add more if there is no empty slot in the queue', () => {
    const cq = new CircularQueue(1);
    cq.enqueue('apple');
    expect(() => cq.enqueue('banana')).toThrowError('max length reached');
    expect(cq.getSize()).toEqual(1);
  });

  it('should maintain order of enqueue and dequeue', () => {
    const cq = new CircularQueue(3);
    cq.enqueue('apple');
    cq.enqueue('banana');
    cq.enqueue('citrus');
    expect(cq.dequeue()).toEqual('apple');
    expect(cq.dequeue()).toEqual('banana');
    expect(cq.dequeue()).toEqual('citrus');
    expect(cq.getSize()).toEqual(3);
  });

  it('should be able to enqueue more than length of queue after some item dequeed', () => {
    const cq = new CircularQueue(1);
    cq.enqueue('apple');
    cq.dequeue();
    expect(() => cq.enqueue('banana')).not.toThrowError('max length reached');
    expect(cq.dequeue()).toEqual('banana');
    expect(cq.getSize()).toEqual(1);
  });

  it('should be able to peek on next item', () => {
    const cq = new CircularQueue(2);
    cq.enqueue('apple');
    expect(cq.peek()).toEqual('apple');
    cq.enqueue('banana');
    expect(cq.peek()).toEqual('apple');
    expect(cq.getSize()).toEqual(2);
  });

  it('should be able to peek the correct item after dequeue', () => {
    const cq = new CircularQueue(3);
    expect(cq.peek()).toEqual(undefined);
    cq.enqueue('apple');
    cq.enqueue('banana');
    cq.enqueue('cirtus');
    expect(cq.peek()).toEqual('apple');
    cq.dequeue();
    expect(cq.peek()).toEqual('banana');
    cq.dequeue();
    expect(cq.peek()).toEqual('citrus');
    cq.dequeue();
    expect(cq.peek()).toEqual(undefined);
  });

  it('cannot enqueue undefined', () => {
    const cq = new CircularQueue(2);
    expect(() => cq.enqueue(undefined)).toThrowError(
      'enqueue item cannot be undefined'
    );
    expect(cq.getSize()).toEqual(2);
  });
});
