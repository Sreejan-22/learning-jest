const sum = require("./sum");

test("adds 1 + 2 equals to 3", () => {
  expect(sum(1, 2)).toBe(3);
});
