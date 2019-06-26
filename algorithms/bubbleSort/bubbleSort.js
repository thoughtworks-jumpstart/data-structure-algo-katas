module.exports.bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        const value = array[j];
        array[j] = array[j - 1];
        array[j - 1] = value;
      }
    }
  }
  return array;
};
