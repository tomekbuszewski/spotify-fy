import getPercentage from "@services/getPercentage";

describe("getPercentage tests", () => {
  it("should return proper value as number", () =>
    expect(getPercentage(100, 50)).toBe(50));

  it("should return proper value as percent (string)", () =>
    expect(getPercentage(100, 50, true)).toBe("50%"));
});
