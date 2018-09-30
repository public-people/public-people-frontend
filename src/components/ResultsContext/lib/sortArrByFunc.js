export default (arr, fn) => arr.concat().sort(fn);
// This is non-destructive so does not sort the input array. Instead it returns
// a new array that has been sorted.
