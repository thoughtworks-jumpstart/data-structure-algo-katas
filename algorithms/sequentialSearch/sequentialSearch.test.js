const { sequentialSearch } = require("./sequentialSearch");

describe("sequential search", () => {
  it("should return null if bob not found", () => {
    expect(sequentialSearch(["amy"], "bob")).toEqual(null);
  });

  it("should return index of bob if bob is the only person", () => {
    expect(sequentialSearch(["bob"], "bob")).toEqual(0);
  });

  it("should return index of bob if bob is the third person", () => {
    expect(sequentialSearch(["amy", "jane", "bob"], "bob")).toEqual(2);
  });
});
