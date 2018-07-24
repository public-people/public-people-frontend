import extractFirstLastWords from "./../extractFirstLastWords";

const fourWords = "Lorem ipsum dolor sit";
const threeWords = "Lorem ipsum dolor";
const twoWords = "Lorem ipsum";
const oneWords = "Lorem";
const noWords = null;

test("Four words", () =>
  expect(extractFirstLastWords(fourWords)).toBe("Lorem sit"));
test("Three words", () =>
  expect(extractFirstLastWords(threeWords)).toBe("Lorem dolor"));
test("Two words", () =>
  expect(extractFirstLastWords(twoWords)).toBe("Lorem ipsum"));
test("One words", () => expect(extractFirstLastWords(oneWords)).toBe("Lorem"));
test("No words", () => expect(extractFirstLastWords(noWords)).toBe(null));
