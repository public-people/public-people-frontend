import getHighestPriority from "./../lib/getHighestPriority";
import { rolePriorityEnum } from "../enums/rolePriority";

describe("ResultsContext: getHighestPriority", () => {
  it("getHighestPriority({ 0: undefined, 1000: undefined }, rolePriorityEnum) => 0", () => {
    expect(
      getHighestPriority(
        { "0": undefined, "1000": undefined },
        rolePriorityEnum
      )
    ).toEqual(0);
  });
  it("getHighestPriority({ 1000: undefined }, rolePriorityEnum) => 1000", () => {
    expect(getHighestPriority({ "1000": undefined }, rolePriorityEnum)).toEqual(
      1000
    );
  });
  it("getHighestPriority({ 0: undefined }, rolePriorityEnum) => 0", () => {
    expect(getHighestPriority({ "0": undefined }, rolePriorityEnum)).toEqual(0);
  });
  it("getHighestPriority(emptyVariable, rolePriorityEnum) => throw", () => {
    expect(() => {
      /* eslint-disable no-undef */
      getHighestPriority(emptyVariable, rolePriorityEnum);
      /* eslint-enable no-undef */
    }).toThrow();
  });
  it("getHighestPriority(1, rolePriorityEnum) => throw", () => {
    expect(() => {
      getHighestPriority(1, rolePriorityEnum);
    }).toThrow();
  });
  it("getHighestPriority(true, rolePriorityEnum) => throw", () => {
    expect(() => {
      getHighestPriority(true, rolePriorityEnum);
    }).toThrow();
  });
  it("getHighestPriority('string', rolePriorityEnum) => throw", () => {
    expect(() => {
      getHighestPriority("string", rolePriorityEnum);
    }).toThrow();
  });
  it("getHighestPriority(undefined, rolePriorityEnum) => throw", () => {
    expect(() => {
      getHighestPriority(undefined, rolePriorityEnum);
    }).toThrow();
  });
  it("getHighestPriority(null, rolePriorityEnum) => throw", () => {
    expect(() => {
      getHighestPriority(null, rolePriorityEnum);
    }).toThrow();
  });
});
