module.exports.binarySearch = (array, id) => {
  var low = 0;
  var high = array.length - 1;
  return recurseBinarySearch(low, high, array, id);
};

function recurseBinarySearch(low, high, array, itemId) {
  if (low > high) {
    return null;
  }
  let mid = Math.floor((low + high) / 2);
  if (array[mid].id === itemId) {
    return array[mid];
  } else if (itemId < array[mid].id) {
    return recurseBinarySearch(low, mid - 1, array, itemId);
  } else {
    return recurseBinarySearch(mid + 1, high, array, itemId);
  }
}
