export default (a, b) => {
  if (
    (b === undefined || b === null || Number.isNaN(b)) &&
    (a === undefined || a === null || Number.isNaN(a))
  ) {
    throw new Error(`This sort function requires numbers only.`);
  }
  return b - a;
};
