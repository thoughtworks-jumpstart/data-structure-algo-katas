module.exports.testSortAlgo = sortAlgo => {
  describe('sort', () => {
    it('should sort array', () => {
      expect(sortAlgo([9, 8, 7])).toEqual([7, 8, 9]);
      expect(sortAlgo([])).toEqual([]);
      expect(sortAlgo([1, 3, 5, 7, 13])).toEqual([1, 3, 5, 7, 13]);
      expect(sortAlgo([5, 13, 1, 3, 7])).toEqual([1, 3, 5, 7, 13]);
      expect(sortAlgo([13, 13, 1, -1, 7, 7])).toEqual([-1, 1, 7, 7, 13, 13]);
    });
  });
};
