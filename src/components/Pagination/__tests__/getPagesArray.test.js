import { getPageArray, getArray } from "./../lib/getPageArray";

describe("Pagination: getArray", () => {
  const num = 5;
  const expected = [1, 2, 3, 4, 5];
  it("getArray(5) => [1, 2, 3, 4, 5]", () => {
    expect(getArray(num)).toEqual(expected);
  });
});

const PGS_TO_SHOW = 5;
const MIDPOINT = 2;

describe("Pagination: getPageArray", () => {
  const optionTemp = { options: { totalPages: null, currPage: null } };

  const totalPages1 = 1;
  const totalPages2 = 2;
  const totalPages3 = 3;
  const totalPages4 = 4;
  const totalPages5 = 5;
  const totalPages6 = 6;
  const totalPages7 = 7;
  const totalPages8 = 8;
  const totalPages9 = 9;
  const totalPages10 = 10;
  const totalPages20 = 20;
  const totalPages100 = 100;

  const currPage1 = 1;
  const currPage2 = 2;
  const currPage3 = 3;
  const currPage4 = 4;
  const currPage5 = 5;
  const currPage6 = 6;
  const currPage7 = 7;
  const currPage8 = 8;
  const currPage9 = 9;
  const currPage10 = 10;
  const currPage12 = 12;

  const currPage95 = 95;
  const currPage96 = 96;
  const currPage97 = 97;
  const currPage98 = 98;
  const currPage99 = 99;
  const currPage100 = 100;

  /* eslint-disable camelcase */

  const option10_1 = { totalPages: totalPages10, currPage: currPage1 };
  const option1_1 = { totalPages: totalPages1, currPage: currPage1 };
  const option2_1 = { totalPages: totalPages2, currPage: currPage1 };
  const option3_3 = { totalPages: totalPages3, currPage: currPage3 };
  const option4_3 = { totalPages: totalPages4, currPage: currPage3 };
  const option6_3 = { totalPages: totalPages6, currPage: currPage3 };
  const option6_4 = { totalPages: totalPages6, currPage: currPage4 };
  const option6_5 = { totalPages: totalPages6, currPage: currPage5 };
  const option6_6 = { totalPages: totalPages6, currPage: currPage6 };
  const option7_6 = { totalPages: totalPages7, currPage: currPage6 };
  const option8_6 = { totalPages: totalPages8, currPage: currPage6 };
  const option10_4 = { totalPages: totalPages10, currPage: currPage4 };
  const option10_9 = { totalPages: totalPages10, currPage: currPage9 };
  const option20_9 = { totalPages: totalPages20, currPage: currPage9 };
  const option20_12 = { totalPages: totalPages20, currPage: currPage12 };
  const option100_9 = { totalPages: totalPages100, currPage: currPage9 };
  const option100_95 = { totalPages: totalPages100, currPage: currPage95 };
  const option100_96 = { totalPages: totalPages100, currPage: currPage96 };
  const option100_97 = { totalPages: totalPages100, currPage: currPage97 };
  const option100_99 = { totalPages: totalPages100, currPage: currPage99 };
  const option100_100 = { totalPages: totalPages100, currPage: currPage100 };

  it("totalPages: 10, currPage: 1", () => {
    expect(getPageArray(option10_1)).toEqual([1, 2, 3, 4, 5]);
  });
  it("totalPages: 1, currPage: 1", () => {
    expect(getPageArray(option1_1)).toEqual([]);
  });
  it("totalPages: 2, currPage: 1", () => {
    expect(getPageArray(option2_1)).toEqual([1, 2]);
  });
  it("totalPages: 3, currPage: 3", () => {
    expect(getPageArray(option3_3)).toEqual([1, 2, 3]);
  });
  it("totalPages: 4, currPage: 3", () => {
    expect(getPageArray(option4_3)).toEqual([1, 2, 3, 4]);
  });
  it("totalPages: 6, currPage: 3", () => {
    expect(getPageArray(option6_3)).toEqual([1, 2, 3, 4, 5]);
  });
  it("totalPages: 6, currPage: 4", () => {
    expect(getPageArray(option6_4)).toEqual([2, 3, 4, 5, 6]);
  });
  it("totalPages: 6, currPage: 5", () => {
    expect(getPageArray(option6_5)).toEqual([2, 3, 4, 5, 6]);
  });
  it("totalPages: 6, currPage: 6", () => {
    expect(getPageArray(option6_6)).toEqual([2, 3, 4, 5, 6]);
  });
  it("totalPages: 7, currPage: 6", () => {
    expect(getPageArray(option7_6)).toEqual([3, 4, 5, 6, 7]);
  });
  it("totalPages: 8, currPage: 6", () => {
    expect(getPageArray(option8_6)).toEqual([4, 5, 6, 7, 8]);
  });
  it("totalPages: 10, currPage: 4", () => {
    expect(getPageArray(option10_4)).toEqual([2, 3, 4, 5, 6]);
  });
  it("totalPages: 10, currPage: 9", () => {
    expect(getPageArray(option10_9)).toEqual([6, 7, 8, 9, 10]);
  });
  it("totalPages: 20, currPage: 9", () => {
    expect(getPageArray(option20_9)).toEqual([7, 8, 9, 10, 11]);
  });
  it("totalPages: 20, currPage: 12", () => {
    expect(getPageArray(option20_12)).toEqual([10, 11, 12, 13, 14]);
  });
  it("totalPages: 100, currPage: 9", () => {
    expect(getPageArray(option100_9)).toEqual([7, 8, 9, 10, 11]);
  });
  it("totalPages: 100, currPage: 95", () => {
    expect(getPageArray(option100_95)).toEqual([93, 94, 95, 96, 97]);
  });
  it("totalPages: 100, currPage: 96", () => {
    expect(getPageArray(option100_96)).toEqual([94, 95, 96, 97, 98]);
  });
  it("totalPages: 100, currPage: 97", () => {
    expect(getPageArray(option100_97)).toEqual([95, 96, 97, 98, 99]);
  });
  it("totalPages: 100, currPage: 99", () => {
    expect(getPageArray(option100_99)).toEqual([96, 97, 98, 99, 100]);
  });
  it("totalPages: 100, currPage: 100", () => {
    expect(getPageArray(option100_100)).toEqual([96, 97, 98, 99, 100]);
  });
});
/* eslint-enable camelcase */
