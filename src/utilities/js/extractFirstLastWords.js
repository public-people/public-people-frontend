export default function extractFirstLastWords(fullString) {
  if (fullString === null || fullString === undefined) {
    return null;
  }
  // Trim the string to account for accidental
  // whitespaces on either side then split the string into an array on the spaces.
  const strSplit = fullString.trim().split(" ");
  // If there is only one result, return that. Otherwise, return a spaced string
  // concatenation of the first and last items in the array.
  const firstLastWords =
    strSplit.length === 1
      ? strSplit[0]
      : `${strSplit[0]} ${strSplit[strSplit.length - 1]}`;
  return firstLastWords;
}
