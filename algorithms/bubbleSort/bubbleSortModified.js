module.exports.bubbleSort = array => {
  console.log("Original array: ", array);
  for (var i = 0; i < array.length - 1; i++) {
    let swap = false;
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swap = true;
      }
      console.log(array);
    }
    if (!swap) {
      break;
    }
  }
  return array;
};
