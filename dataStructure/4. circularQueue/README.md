# Circular Queue

- A Fixed Length Queue represents how an array works internally.
- You can tell that is not memory efficient if you want to reuse the same array. 
- It will be great if we can reuse the unused portion of the array.


## Instuctions

Implement a fixed lenght queue with constuctor and 3 function.

1. constructor(length) // create a queue with fixed length
2. enqueue(item) // takes in an item and adds it to the stack. Throws an error if queue is full.
3. dequeue // remove and return the first item that is in the stack
4. peek // return the first item that is in the stack
