import ActionNameCreator from "@services/actionNameCreator";

describe("ActionNameCreator service tests", () => {
  it("should properly create an action", () => {
    const act = new ActionNameCreator("test");
    expect(act.get("action")).toBe("[TEST] ACTION");
    expect(act.get("action test")).toBe("[TEST] ACTION_TEST");
  });
});
