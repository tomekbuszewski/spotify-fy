import { appReducers } from "@redux/reducers";

describe("Redux `reducers` tests", () => {
  it("should contain `playlist` reducer", () => {
    expect(Object.keys(appReducers)).toContain("playlist");
  });
});
