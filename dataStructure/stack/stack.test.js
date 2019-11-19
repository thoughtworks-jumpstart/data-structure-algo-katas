const Stack = require("./stack");

describe("Stack", () => {
  it("should be able to push and pop item", () => {
    const stack = new Stack();
    stack.push("apple");
    expect(stack.pop()).toEqual("apple");
  });

  it("should maintain the order of a stack", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("banana");
    stack.push("citrus");
    expect(stack.pop()).toEqual("citrus");
    expect(stack.pop()).toEqual("banana");
    expect(stack.pop()).toEqual("apple");
  });

  it("should be able to peek the top of the stack", () => {
    const stack = new Stack();
    expect(stack.peek()).toBeUndefined();
    stack.push("apple");
    expect(stack.peek()).toEqual("apple");
    stack.push("banana");
    expect(stack.peek()).toEqual("banana");
  });
});
