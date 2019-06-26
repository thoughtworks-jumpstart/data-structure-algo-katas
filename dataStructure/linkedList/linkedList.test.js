const { Node, LinkedList } = require('./linkedList');

describe('LinkedList', () => {
  describe('Node', () => {
    it('should throw an error when next is not a node', () => {
      expect(() => new Node('apple', 'banana')).toThrow('not a node');
    });

    it('can create a node without next', () => {
      const node = new Node('apple');
      expect(node instanceof Node).toBeTruthy();
    });

    it('can create a node if next is a node', () => {
      const nodeA = new Node('apple');
      const nodeB = new Node('banana', nodeA);

      expect(nodeB.data).toEqual('banana');
      expect(nodeB.next).toBe(nodeA);
    });
  });

  describe('LinkedList', () => {
    let list;
    beforeEach(() => {
      list = new LinkedList();
    });

    it('unshift should insert item to first item', () => {
      expect(list.getFirst()).toEqual(null);
      expect(() => list.unshift('apple')).toThrow('not a node');
      const nodeA = new Node('apple');
      list.unshift(nodeA);
      expect(list.getFirst()).toBe(nodeA);

      const nodeB = new Node('banana');
      list.unshift(nodeB);
      const firstNode = list.getFirst();
      expect(firstNode).toBe(nodeB);
      expect(firstNode.next).toBe(nodeA);
    });

    it('shift should return head', () => {
      expect(list.shift()).toEqual(null);

      list.unshift(new Node('apple'));
      list.unshift(new Node('banana'));
      expect(list.shift().data).toEqual('banana');
      expect(list.shift().data).toEqual('apple');
      expect(list.shift()).toEqual(null);
    });

    it('getLast should get the last item', () => {
      expect(list.getLast()).toBe(null);
      const nodeA = new Node('apple');
      expect(list.unshift(nodeA));
      expect(list.getLast()).toBe(nodeA);
      expect(list.getLast()).toBe(nodeA);
      expect(list.unshift(new Node('banana')));
      expect(list.getLast()).toBe(nodeA);
      list.shift();
      expect(list.getLast()).toBe(nodeA);
    });

    it('pop should remove and return last item', () => {
      let node, nodeA, nodeB;
      expect(list.pop()).toBe(null);
      node = new Node('apple');
      list.unshift(node);
      expect(list.pop()).toEqual(node);
      expect(list.pop()).toEqual(null);
      node = new Node('apple');
      nodeA = new Node('a');
      nodeB = new Node('b');
      list.unshift(node);
      list.unshift(nodeA);
      list.unshift(nodeB);
      expect(list.pop()).toEqual(node);
      expect(list.pop()).toEqual(nodeA);
      expect(list.pop()).toEqual(nodeB);
      expect(list.pop()).toEqual(null);
    });

    it('push should append to the last item', () => {
      expect(() => list.push('a')).toThrow('not a node');
      const node = new Node('a');
      list.push(node);
      expect(list.getLast()).toEqual(node);
      const nodeB = new Node('b');
      list.push(nodeB);
      expect(list.getLast()).toEqual(nodeB);
      expect(list.getFirst()).toEqual(node);
      const nodeC = new Node('c');
      list.push(nodeC);
      expect(list.getLast()).toEqual(nodeC);
      expect(list.getFirst()).toEqual(node);
    });

    it('getSize should return size of list', () => {
      expect(list.getSize()).toEqual(0);
      list.shift();
      expect(list.getSize()).toEqual(0);
      list.pop();
      expect(list.getSize()).toEqual(0);
      list.unshift(new Node('a'));
      expect(list.getSize()).toEqual(1);
      list.push(new Node('a'));
      expect(list.getSize()).toEqual(2);
      list.unshift(new Node('a'));
      expect(list.getSize()).toEqual(3);
      list.shift();
      expect(list.getSize()).toEqual(2);
      list.pop();
      expect(list.getSize()).toEqual(1);
      list.shift();
      expect(list.getSize()).toEqual(0);
      list.shift();
      expect(list.getSize()).toEqual(0);
      list.pop();
      expect(list.getSize()).toEqual(0);
    });

    it('getAt should return item at nth position', () => {
      expect(() => list.getAt('a')).toThrow('not a number');
      expect(list.getAt(0)).toEqual(null);
      const nodeA = new Node('a');
      list.unshift(nodeA);
      expect(list.getAt(0)).toEqual(nodeA);
      expect(() => list.getAt(1)).toThrow('index out of bound');
      const nodeB = new Node('b');
      const nodeC = new Node('c');
      list.unshift(nodeB);
      list.unshift(nodeC);
      expect(list.getAt(0)).toEqual(nodeC);
      expect(list.getAt(1)).toEqual(nodeB);
      expect(list.getAt(2)).toEqual(nodeA);
      expect(() => list.getAt(3)).toThrow('index out of bound');
      expect(() => list.getAt(-1)).toThrow('index out of bound');
    });

    it('insertAt should insert item at nth position', () => {
      const nodeA = new Node('a');
      expect(() => list.insertAt(-1, nodeA)).toThrow('index out of bound');
      expect(() => list.insertAt(1, nodeA)).toThrow('index out of bound');
      expect(() => list.insertAt(2, nodeA)).toThrow('index out of bound');
      expect(() => list.insertAt(0, 'nodeA')).toThrow('not a node');
      list.insertAt(0, nodeA);
      expect(list.getAt(0)).toBe(nodeA);
      const nodeB = new Node('b');
      list.insertAt(0, nodeB);
      expect(list.getAt(0)).toBe(nodeB);
      expect(list.getAt(1)).toBe(nodeA);
      const nodeC = new Node('c');
      list.insertAt(1, nodeC);
      expect(list.getAt(0)).toBe(nodeB);
      expect(list.getAt(1)).toBe(nodeC);
      expect(list.getAt(2)).toBe(nodeA);
      expect(() => list.insertAt(4, nodeA)).toThrow('index out of bound');
    });

    it('removeAt should remove item at nth position', () => {
      const nodeA = new Node('a');
      const nodeB = new Node('b');
      const nodeC = new Node('c');
      expect(() => list.removeAt(-1)).toThrow('index out of bound');
      expect(() => list.removeAt(1)).toThrow('index out of bound');
      expect(() => list.removeAt(2)).toThrow('index out of bound');
      list.insertAt(0, nodeA);
      expect(() => list.removeAt(1)).toThrow('index out of bound');
      expect(() => list.removeAt(-1)).toThrow('index out of bound');
      expect(list.removeAt(0)).toBe(nodeA);
      expect(() => list.getAt(1)).toThrow('index out of bound');
      expect(list.getAt(0)).toEqual(null);
      list.insertAt(0, nodeA);
      list.insertAt(0, nodeB);
      list.insertAt(0, nodeC);
      expect(list.removeAt(1)).toBe(nodeB);
      expect(list.getAt(0)).toBe(nodeC);
      expect(list.getAt(1)).toBe(nodeA);
      expect(list.removeAt(0)).toBe(nodeC);
      expect(list.getAt(0)).toBe(nodeA);
      expect(() => list.getAt(1)).toThrow('index out of bound');
      expect(list.removeAt(0)).toBe(nodeA);
      expect(list.getAt(0)).toEqual(null);
    });
  });
});
