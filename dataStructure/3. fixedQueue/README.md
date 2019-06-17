# FixedLengthQueue

- Typically array has fixed length that needs to be initialized.
- This allow memory allocation and ensures that there is a slot for what you want to push in.
- This makes traversing thru the array very efficient and fast.
- Note: Javascript array are treated like objects thus we typically don’t have to set a size.

## Instuctions

Implement a fixed lenght queue with constuctor and 3 function.

1. constructor(length) // create a queue with fixed length
2. enqueue(item) // takes in an item and adds it to the stack. Throws an error if queue is full.
3. dequeue // remove and return the first item that is in the stack
4. peek // return the first item that is in the stack
