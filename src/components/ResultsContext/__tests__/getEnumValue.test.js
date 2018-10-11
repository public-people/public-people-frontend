import { rolePriorityEnum } from "../enums/rolePriority";
import getEnumValue from "../lib/getEnumValue";

describe("ResultsContext: getEnumValue", () => {
  it("getEnumValue('national Assembly', rolePriorityEnum) => 0", () => {
    expect(getEnumValue("national Assembly", rolePriorityEnum)).toEqual(0);
  });
  it("getEnumValue('national assembly', rolePriorityEnum) => 0", () => {
    expect(getEnumValue("national assembly", rolePriorityEnum)).toEqual(0);
  });
  it("getEnumValue('National Assembly', rolePriorityEnum) => 0", () => {
    expect(getEnumValue("National Assembly", rolePriorityEnum)).toEqual(0);
  });
  it("getEnumValue('empty', rolePriorityEnum) => 1000", () => {
    expect(getEnumValue("empty", rolePriorityEnum)).toEqual(1000);
  });
  it("getEnumValue('Happy Daze', rolePriorityEnum) => 1000", () => {
    expect(getEnumValue("Happy Daze", rolePriorityEnum)).toEqual(1000);
  });
  /* eslint-disable no-undef */
  it("getEnumValue('Happy Daze', <empty variable>) => throw", () => {
    expect(() => {
      getEnumValue("Happy Daze", priorityEnum);
    }).toThrow();
  });
  /* eslint-enable no-undef */
  it("getEnumValue(1, rolePriorityEnum) => 1000", () => {
    expect(getEnumValue(1, rolePriorityEnum)).toEqual(1000);
  });
  it("getEnumValue(true, rolePriorityEnum) => 1000", () => {
    expect(getEnumValue(true, rolePriorityEnum)).toEqual(1000);
  });
  it("getEnumValue(null, rolePriorityEnum) => 1000", () => {
    expect(getEnumValue(null, rolePriorityEnum)).toEqual(1000);
  });
  it("getEnumValue(undefined, rolePriorityEnum) => 1000", () => {
    expect(getEnumValue(undefined, rolePriorityEnum)).toEqual(1000);
  });
  it("getEnumValue({bar: 1}, rolePriorityEnum) => 1000", () => {
    expect(getEnumValue({ bar: 1 }, rolePriorityEnum)).toEqual(1000);
  });
  it("getEnumValue([1, 2, 3], rolePriorityEnum) => 1000", () => {
    expect(getEnumValue([1, 2, 3], rolePriorityEnum)).toEqual(1000);
  });
});
