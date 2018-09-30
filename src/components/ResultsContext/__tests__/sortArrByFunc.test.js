import sortDateAsc from "./../lib/sortDateAsc";
import sortArrByFunc from "./../lib/sortArrByFunc";

const mock1 = [
  { id: 1, date: Date.parse("2014-05-06") },
  { id: 2, date: Date.parse("2015-05-06") },
  { id: 3, date: Date.parse("2016-06-06") },
  { id: 4, date: Date.parse("2014-07-06") }
];

const mock1Sorted = [
  { id: 3, date: Date.parse("2016-06-06") },
  { id: 2, date: Date.parse("2015-05-06") },
  { id: 4, date: Date.parse("2014-07-06") },
  { id: 1, date: Date.parse("2014-05-06") }
];

const mock2 = [
  { id: 1, date: Date.parse("2014-05-07") },
  { id: 2, date: Date.parse("2015-06-06") },
  { id: 3, date: Date.parse("2016-07-06") },
  { id: 4, date: Date.parse("2014-05-06") }
];

const mock2Sorted = [
  { id: 3, date: Date.parse("2016-07-06") },
  { id: 2, date: Date.parse("2015-06-06") },
  { id: 1, date: Date.parse("2014-05-07") },
  { id: 4, date: Date.parse("2014-05-06") }
];

const mock3 = [
  { id: 1, date: Date.parse("2014-05-07") },
  { id: 2, date: Date.parse("2015-06-06") },
  { id: 3, date: undefined },
  { id: 4, date: Date.parse("2014-05-06") }
];

const mock3Sorted = [
  { id: 2, date: Date.parse("2015-06-06") },
  { id: 1, date: Date.parse("2014-05-07") },
  { id: 4, date: Date.parse("2014-05-06") },
  { id: 3, date: undefined }
];

const mock4 = [
  { id: 3, date: Date.parse("2016-07-06") },
  { id: 1, date: Date.parse("2014-05-07") },
  { id: 4, date: Date.parse("2014-05-06") },
  { id: 2, date: Date.parse(undefined) }
];

const mock4Sorted = [
  { id: 3, date: Date.parse("2016-07-06") },
  { id: 1, date: Date.parse("2014-05-07") },
  { id: 4, date: Date.parse("2014-05-06") },
  { id: 2, date: Date.parse(undefined) }
];

const mock5 = [
  { id: 1, date: Date.parse(undefined) },
  { id: 2, date: Date.parse(null) },
  { id: 3, date: Date.parse(undefined) },
  { id: 4, date: Date.parse(undefined) }
];

describe("ResultsContext: sortArrByFunc", () => {
  it("sortArrByFunc(mock1, sortDateAsc) => mock1Sorted", () => {
    expect(sortArrByFunc(mock1, sortDateAsc)).toEqual(
      expect.arrayContaining(mock1Sorted)
    );
  });
  it("sortArrByFunc(mock2, sortDateAsc) => mock2Sorted", () => {
    expect(sortArrByFunc(mock2, sortDateAsc)).toEqual(
      expect.arrayContaining(mock2Sorted)
    );
  });
  it("sortArrByFunc(mock3, sortDateAsc) => mock3Sorted", () => {
    expect(sortArrByFunc(mock3, sortDateAsc)).toEqual(
      expect.arrayContaining(mock3Sorted)
    );
  });
  it("sortArrByFunc(mock4, sortDateAsc) => mock4Sorted", () => {
    expect(sortArrByFunc(mock4, sortDateAsc)).toEqual(
      expect.arrayContaining(mock4Sorted)
    );
  });
  it("sortArrByFunc(mock5, sortDateAsc) => throw", () => {
    expect(() => {
      sortArrByFunc(mock5, sortDateAsc);
    }).toThrow();
  });
  it("sortArrByFunc(1, sortDateAsc) => throw", () => {
    expect(() => {
      sortArrByFunc(1, sortDateAsc);
    }).toThrow();
  });
  it("sortArrByFunc(true, sortDateAsc) => throw", () => {
    expect(() => {
      sortArrByFunc(true, sortDateAsc);
    }).toThrow();
  });
  it("sortArrByFunc({bar: 1}}, sortDateAsc) => throw", () => {
    expect(() => {
      sortArrByFunc({ bar: 1 }, sortDateAsc);
    }).toThrow();
  });
  it("sortArrByFunc({bar: 1}}, notAFunction) => throw", () => {
    expect(() => {
      /* eslint-disable no-undef */
      sortArrByFunc({ bar: 1 }, notAFunction);
      /* eslint-enable no-undef */
    }).toThrow();
  });
});
