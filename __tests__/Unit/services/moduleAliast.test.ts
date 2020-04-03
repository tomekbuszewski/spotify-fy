import moduleAlias from "../../../src/services/moduleAlias";
import path from "path";

const PATHS = {
  "@config/*": ["./@config/*"],
  "@src/*": ["./src/*"],
};

describe("`moduleAlias` tests", () => {
  it("should generate proper config for Jest", () => {
    expect(moduleAlias("jest", PATHS as any)).toMatchObject({
      "@config/(.*)$": "<rootDir>/@config/$1",
      "@src/(.*)$": "<rootDir>/src/$1",
    });
  });

  it("should generate proper config for Babel-based generators", () => {
    const BASE_PATH = path.resolve();

    expect(moduleAlias("babel", PATHS as any)).toMatchObject({
      "@config": `${BASE_PATH}/@config`,
      "@src": `${BASE_PATH}/src`,
    });
  });

  it("should properly import `tsconfig` values", () => {
    expect(moduleAlias().constructor === Object).toBeTruthy();
  });

  it("should throw when different mode is requested", () => {
    expect(() => { moduleAlias("something", PATHS as any); }).toThrow();
  });
});
