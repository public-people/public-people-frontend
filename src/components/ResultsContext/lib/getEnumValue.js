export default (value, enumObj) => {
  const string =
    typeof value === "string"
      ? value
          .toLowerCase()
          .split(" ")
          .join("_")
      : "empty";

  return enumObj[string] !== undefined ? enumObj[string] : 1000;
};
