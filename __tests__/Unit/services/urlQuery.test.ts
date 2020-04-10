import query from "@services/urlQuery";

describe("`URLQuery` service tests", () => {
  it("should properly merge items from object", () => {
    expect(query({ one: "two", three: "four" })).toBe("one=two&three=four");
  });

  it("should properly unwrap string to object", () => {
    expect(query("one=two&three=four")).toMatchObject({ one: "two", three: "four" });
  });
});
