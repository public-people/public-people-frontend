import extractQueryString from "./../extractQueryString";

const fullString = "?test_1=lorem&test_2=ipsum";

test("First key", () =>
  expect(extractQueryString("test_1", fullString)).toBe("lorem"));
test("Second key", () =>
  expect(extractQueryString("test_2", fullString)).toBe("ipsum"));
test("Absent key", () =>
  expect(extractQueryString("test_3", fullString)).toBe(null));
test("No keys", () => expect(extractQueryString("test_4", "")).toBe(null));
