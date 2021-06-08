import { range } from "../lib/array";

describe("range", () => {
  it("return array when given a arg", () => {
    const actual = range(5);
    const expectVal = [0, 1, 2, 3, 4];
    expect(actual).toEqual(expectVal);
  });
  it("return array when given 2 args", () => {
    const actual = range(4, 7);
    const expectVal = [4, 5, 6];
    expect(actual).toEqual(expectVal);
  });
  it("return array when given 3 args", () => {
    const actual = range(0, 11, 2);
    const expectVal = [0, 2, 4, 6, 8, 10];
    expect(actual).toEqual(expectVal);
  });
});
