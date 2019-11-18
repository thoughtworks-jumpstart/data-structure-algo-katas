module.exports.binarySearch = (array, itemId) => {
  const searchMid = (low, high) => {
    if (low > high) {
      return null;
    }
    mid = Math.floor((low + high) / 2);
    midItem = array[mid];
    if (midItem.id === itemId) {
      return midItem;
    } else if (midItem.id > itemId) {
      return searchMid(low, mid - 1);
    } else {
      return searchMid(mid + 1, high);
    }
  };

  let low = 0;
  let high = array.length - 1;
  return searchMid(low, high);
};
