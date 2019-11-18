module.exports.sequentialSearch = (array, person) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === person) {
      return i;
    }
  }
  return null;
};
