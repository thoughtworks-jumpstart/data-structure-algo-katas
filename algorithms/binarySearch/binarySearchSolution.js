module.exports.binarySearch = (array, itemId) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    midItem = array[mid];
    if (midItem.id === itemId) {
      return midItem;
    } else if (midItem.id > itemId) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};
