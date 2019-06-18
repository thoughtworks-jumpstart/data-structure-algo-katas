const { binarySearch } = require('./binarySearch');

const data = [
  {
    id: 1,
    name: 'Alice',
  },
  {
    id: 7,
    name: 'Bob',
  },
  {
    id: 11,
    name: 'Charlie',
  },
];

describe('binary search by sorted id', () => {
  it('returns the element found', () => {
    expect(binarySearch(data, data[1].id)).toEqual(data[1]);
  });

  it('returns if is first item of array', () => {
    expect(binarySearch(data, data[0].id)).toEqual(data[0]);
  });

  it('returns the last item of array', () => {
    expect(binarySearch(data, data[data.length - 1].id)).toEqual(
      data[data.length - 1]
    );
  });

  it('return null if item does not exist', () => {
    expect(binarySearch(data, 0)).toEqual(null);
  });
});
