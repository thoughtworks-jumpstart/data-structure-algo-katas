const mergeSort = require("./mergeSort");

describe("mergeSort", () => {
  it("should return empty array if array is empty", () => {
    expect(mergeSort([])).toEqual([]);
  });

  it("should return already sorted array if array is already sorted", () => {
    expect(mergeSort([1, 3, 5, 10])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is not sorted", () => {
    expect(mergeSort([1, 10, 3, 5])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is reversely sorted", () => {
    expect(mergeSort([10, 5, 3, 1])).toEqual([1, 3, 5, 10]);
  });

  it("should return sorted array if array is not sorted with negative numbers", () => {
    expect(mergeSort([1, -10, 3, 5])).toEqual([-10, 1, 3, 5]);
  });

  it("should return sorted array if array is not sorted with negative numbers", () => {
    expect(mergeSort([1, -10, 3, 5])).toEqual([-10, 1, 3, 5]);
  });

  it("should return array even if array has duplicate numbers", () => {
    expect(mergeSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
  });

  it("should return itself for a 1 element input", () => {
    expect(mergeSort([1])).toEqual([1]);
  });
});
