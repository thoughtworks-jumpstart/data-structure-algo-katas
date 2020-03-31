const MergeSort = array => {
  if (array.length === 0) {
    return array;
  }
  return _MergeSortSplit(array, 0, array.length - 1);
};

const _MergeSortSplit = (array, firstIndex, lastIndex) => {
  const segmentLength = lastIndex - firstIndex;
  if (firstIndex === lastIndex) {
    return [array[firstIndex]];
  } else {
    const midpoint = Math.floor(segmentLength / 2);
    const firstHalf = _MergeSortSplit(array, firstIndex, firstIndex + midpoint);
    const secondHalf = _MergeSortSplit(
      array,
      firstIndex + midpoint + 1,
      firstIndex + segmentLength
    );
    const totLength = segmentLength+1;
    const combinedArray = [];
    for (let index = 0; index < totLength; index++) {
      if (firstHalf.length === 0 || secondHalf.length === 0) {
        combinedArray.push(...firstHalf, ...secondHalf);
        break;
      } else if (firstHalf[0] < secondHalf[0]) {
        combinedArray.push(firstHalf.shift());
      } else {
        combinedArray.push(secondHalf.shift());
      }
    }
    return combinedArray;
  }
};

module.exports = MergeSort;
