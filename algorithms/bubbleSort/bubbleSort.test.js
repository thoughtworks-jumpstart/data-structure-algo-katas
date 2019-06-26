const { bubbleSort } = require('./bubbleSort');

describe('bubblesort', () => {
  it('should sort array', () => {
    expect(bubbleSort([9, 8, 7])).toEqual([7, 8, 9]);
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1, 3, 5, 7, 13])).toEqual([1, 3, 5, 7, 13]);
    expect(bubbleSort([5, 13, 1, 3, 7])).toEqual([1, 3, 5, 7, 13]);
    expect(bubbleSort([13, 13, 1, -1, 7, 7])).toEqual([-1, 1, 7, 7, 13, 13]);
  });
});
