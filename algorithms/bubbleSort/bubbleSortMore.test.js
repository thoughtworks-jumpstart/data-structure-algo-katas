const { bubbleSort } = require("./bubbleSortModified");

describe("bubbleSort", () => {
  it("should return empty array if array is empty", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return already sorted array if array is already sorted", () => {
    expect(bubbleSort([1, 3, 5, 10])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is not sorted", () => {
    expect(bubbleSort([1, 10, 3, 5])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is reversely sorted", () => {
    expect(bubbleSort([10, 5, 3, 1])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is not sorted with negative numbers", () => {
    expect(bubbleSort([1, -10, 3, 5])).toEqual([-10, 1, 3, 5]);
  });
});
