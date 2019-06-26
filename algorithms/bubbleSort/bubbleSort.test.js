const { bubbleSort } = require('./bubbleSort');
const { testSortAlgo } = require('../testSortAlgoHelper');

describe('bubbleSort', () => {
  testSortAlgo(bubbleSort);
});
