module.exports.insertionSort = array => {
  for (var i = 1; i < array.length; i++) {
    let key = array[i];
    j = i - 1;

    while (j >= 0 && array[j] > key) {
      // shift j behind
      array[j + 1] = array[j];
      j = j - 1;
    }
    // insert key at the correct position
    array[j + 1] = key;
  }
  return array;
};
