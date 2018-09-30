import getEnumValue from "./getEnumValue";

export const returnRemainder = (
  acc,
  curr,
  index,
  dateProperty,
  priorityEnum
) => {
  const date = Date.parse(curr[dateProperty]);
  // The date conversion is for the sorting algo.
  const dateExpanded = new Date(curr[dateProperty]);
  const year = dateExpanded.getFullYear();
  const priorityValue = getEnumValue(curr.organization.name, priorityEnum);

  const thisYearValueOrInit =
    acc.byYear[year] !== undefined ? acc.byYear[year] : [];

  const thisPriorityValueOrInit =
    acc.byPriority[priorityValue] !== undefined
      ? acc.byPriority[priorityValue]
      : [];

  const thisRemainderPriorityValueOrInit =
    acc.remainderByPriority[priorityValue] !== undefined
      ? acc.remainderByPriority[priorityValue]
      : [];

  const itemObj = {
    index,
    date,
    dateExpanded,
    entry: curr,
    priorityValue
  };

  const accumulator = {
    ...acc,
    remainder: [...acc.remainder, itemObj],
    byYear: { ...acc.byYear, [year]: [...thisYearValueOrInit, itemObj] },
    byPriority: {
      ...acc.byPriority,
      [priorityValue]: [...thisPriorityValueOrInit, itemObj]
    },
    remainderByPriority: {
      ...acc.remainderByPriority,
      [priorityValue]: [...thisRemainderPriorityValueOrInit, itemObj]
    }
  };
  return { ...acc, ...accumulator };
};

export const returnCurrent = (acc, curr, index, priorityEnum) => {
  const priorityValue = getEnumValue(curr.organization.name, priorityEnum);

  const thisPriorityValueOrInit =
    acc.byPriority[priorityValue] !== undefined
      ? acc.byPriority[priorityValue]
      : [];

  const thisCurrentPriorityValueOrInit =
    acc.currentByPriority[priorityValue] !== undefined
      ? acc.currentByPriority[priorityValue]
      : [];

  const itemObj = {
    index,
    date: null,
    dateExpanded: null,
    entry: curr,
    priorityValue
  };

  const accumulator = {
    ...acc,
    current: [...acc.current, itemObj],
    byPriority: {
      ...acc.byPriority,
      [priorityValue]: [...thisPriorityValueOrInit, itemObj]
    },
    currentByPriority: {
      ...acc.currentByPriority,
      [priorityValue]: [...thisCurrentPriorityValueOrInit, itemObj]
    }
  };
  return { ...acc, ...accumulator };
};

// See "How JavaScript’s Reduce method works, when to use it, and some of the
// cool things it can do" https://medium.freecodecamp.org/reduce-f47a7da511a9 for help
// with this code.
export default (arr, dateProperty, priorityEnum) =>
  // Membership end date is null or empty string means it's a current position.
  arr.reduce(
    (acc, curr, index) =>
      curr[dateProperty] === null || curr[dateProperty] === ""
        ? returnCurrent(acc, curr, index, priorityEnum)
        : returnRemainder(acc, curr, index, dateProperty, priorityEnum),
    {
      current: [],
      remainder: [],
      byYear: {},
      currentByPriority: {},
      remainderByPriority: {},
      byPriority: {}
    }
  );
