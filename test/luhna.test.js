import luhnaObj from "../src/luhna";

test("transformArray test #1", () => {
  expect(luhnaObj.transformArr("2323 2323 4242 2324")).toStrictEqual([
    4, 2, 3, 2, 2, 4, 2, 4, 3, 2, 3, 2, 3, 2, 3, 2,
  ]);
});
test("transformArray test #2", () => {
  expect(luhnaObj.transformArr("5555 5555 5555 4444")).toStrictEqual([
    4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  ]);
});
test("transformArray test #3", () => {
  expect(luhnaObj.transformArr("4166 6766 6766 6746")).toStrictEqual([
    6, 4, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 1, 4,
  ]);
});
test("multiplyElements test #1", () => {
  expect(
    luhnaObj.multiplyElementsBy2([
      4, 2, 3, 2, 2, 4, 2, 4, 3, 2, 3, 2, 3, 2, 3, 2,
    ])
  ).toStrictEqual([4, 4, 3, 4, 2, 8, 2, 8, 3, 4, 3, 4, 3, 4, 3, 4]);
});

test("multiplyElements test #2", () => {
  expect(
    luhnaObj.multiplyElementsBy2([
      5, 5, 5, 5, 6, 2, 6, 2, 6, 6, 1, 7, 7, 5, 2, 3,
    ])
  ).toStrictEqual([5, 1, 5, 1, 6, 4, 6, 4, 6, 3, 1, 5, 7, 1, 2, 6]);
});

test("multiplyElements test #3", () => {
  expect(
    luhnaObj.multiplyElementsBy2([
      4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    ])
  ).toStrictEqual([4, 8, 4, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1]);
});
test("multiplyElements test #4", () => {
  expect(
    luhnaObj.multiplyElementsBy2([
      6, 4, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 1, 4,
    ])
  ).toStrictEqual([6, 8, 7, 3, 6, 3, 7, 3, 6, 3, 7, 3, 6, 3, 1, 8]);
});

test("sum elements test #1", () => {
  expect(
    luhnaObj.sumElements([1, 5, 1, 5, 3, 2, 3, 2, 3, 6, 2, 7, 5, 1, 4, 6])
  ).toBe(56);
});
test("sum elements test #2", () => {
  expect(
    luhnaObj.sumElements([8, 2, 6, 2, 4, 4, 4, 4, 6, 2, 6, 2, 6, 4, 6, 4])
  ).toBe(70);
});
test("sum elements test #3", () => {
  expect(
    luhnaObj.sumElements([8, 4, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1])
  ).toBe(52);
});
test("sum elements test #4", () => {
  expect(
    luhnaObj.sumElements([3, 4, 5, 6, 3, 6, 5, 6, 3, 6, 5, 6, 3, 6, 2, 4])
  ).toBe(73);
});
test("checkCard test #1", () => {
  expect(luhnaObj.checkCard("5588 2664 2444 4452")).toBe(
    "nieprawidłowa suma kontrolna"
  );
});
test("checkCard test #2", () => {
  expect(luhnaObj.checkCard("8262444462626464")).toBe(
    "nieprawidłowa suma kontrolna"
  );
});
test("checkCard test #3", () => {
  expect(luhnaObj.checkCard("5555555555554444")).toBe(true);
});
test("nie ma 16 znaków", () => {
  expect(luhnaObj.checkCard("57575")).toBe("zła ilość znaków");
});
test("zawiera cos innego niz cyfry", () => {
  expect(luhnaObj.checkCard("12345678912345nn")).toBe(
    "zawiera nieprawidłowe znaki"
  );
});
