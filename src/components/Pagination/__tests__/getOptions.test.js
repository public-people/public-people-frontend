import { getOptions } from "./../lib/getOptions";

describe("Pagination: getOptions", () => {
  it("getOptions: count: 60, limit: 15, offset: 0, offsetStep: 15", () => {
    expect(getOptions(60, 15, 0, 15)).toEqual({ currPage: 1, totalPages: 4 });
  });
  it("getOptions: count: 75, limit: 15, offset: 15, offsetStep: 15", () => {
    expect(getOptions(75, 15, 15, 15)).toEqual({ currPage: 2, totalPages: 5 });
  });
  it("getOptions: count: 90, limit: 15, offset: 30, offsetStep: 15", () => {
    expect(getOptions(90, 15, 30, 15)).toEqual({ currPage: 3, totalPages: 6 });
  });
  it("getOptions: count: 80, limit: 15, offset: 30, offsetStep: 15", () => {
    expect(getOptions(80, 15, 30, 15)).toEqual({ currPage: 3, totalPages: 6 });
  });
});
