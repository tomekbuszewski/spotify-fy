const getPaths = require("../../src/services/moduleAlias");

module.exports = {
  // testRegex: "(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.[jt]sx?$",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["js", "jsx", "svg", "json", "node", "ts", "tsx"],
  collectCoverage: true,
  moduleNameMapper: getPaths("jest"),
  setupFilesAfterEnv: ["./@config/jest/setupTests.js"],
};
