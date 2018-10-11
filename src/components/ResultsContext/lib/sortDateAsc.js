export default (a, b) => {
  if (
    (b.date === undefined || b.date === null || Number.isNaN(b.date)) &&
    (a.date === undefined || a.date === null || Number.isNaN(a.date))
  ) {
    throw new Error(`No valid dates provided. This function has can handle one missing date, 
    but you likely have a problem with the data if two are coming in.`);
  }
  if (
    (b.date === undefined || b.date === null || Number.isNaN(b.date)) &&
    (a.date !== undefined || a.date !== null || Number.isNaN(a.date) !== true)
  ) {
    return a.date;
  }
  if (
    (a.date === undefined || a.date === null || Number.isNaN(a.date)) &&
    (b.date !== undefined || b.date !== null || Number.isNaN(b.date) !== true)
  ) {
    return b.date;
  }
  return b.date - a.date;
};
