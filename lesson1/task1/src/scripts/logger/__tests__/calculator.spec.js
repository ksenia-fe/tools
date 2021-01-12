import { sum, mult } from "../../calculator/calculator";

it("should return sum of two numbs", () => {
  expect(sum(2, 3)).toEqual(5);
});

it("should return multiplication of two numbs", () => {
  expect(mult(2, 3)).toEqual(6);
});
