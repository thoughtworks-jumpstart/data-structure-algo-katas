# LinkedList and Nodes

A Node contains data and a pointer to the next node.
When there is no next node, the value of next should be null;

LinkedList is a chain of nodes, storing the head and each node pointing to the next.
const list = new LinkedList();
list.head should contain the first node and null if empty;
If list.head contains a node. list.head.next should return the next node in the list.

## Instuctions

Implement Node and Linkedlist.

Node

- constuctor(data, Node)
  - data: any
  - next: Node

LinkedList

- constructor(): set head no null
- getFirst(): returns the head
- unshift(Node):
  - insert an item to the head of the list
  - if head already exist, it should not be the second item in the list
- shift():
  - remove the first item on the list
  - the second item(if exist) should now be the head in the list
- getLast(): return the last item in the list, should NOT remove
- push(Node): find the last node in the list and set the next of last node to the new node
- pop(): remove and return the last item in the list
- getSize(): should return size of list
- getAt(Number): should return the nth number of node in the list
- insertAt(Number, Node): should insert at the nth number in a list
- removeAt(Number): should remove the nth number of item in the list
