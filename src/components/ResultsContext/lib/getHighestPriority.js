export default (obj, enumObj) => {
  if (typeof obj !== "object") {
    throw new Error(`Parameter obj must be an object`);
  }
  return Object.keys(obj).reduce(
    (acc, curr, i, arr) => {
      const found =
        acc.found.length === 0
          ? [Object.values(enumObj).find(el => Number(curr) === Number(el))]
          : acc.found;
      return { ...acc, found };
    },
    {
      found: []
    }
  ).found[0];
};
