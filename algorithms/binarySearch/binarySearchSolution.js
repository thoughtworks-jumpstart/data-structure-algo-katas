module.exports.binarySearch = (array, itemId) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const middleItem = array[middle];
    if (middleItem.id === itemId) {
      return middleItem;
    }
    if (middleItem.id > itemId) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null;
};
