const path = require("path");
const BASE_DIR = path.resolve();

module.exports = (mode = "babel", basePaths = false) => {
  const paths = basePaths || require(`${BASE_DIR}/tsconfig`).compilerOptions.paths;
  const pathsKeys = Object.keys(paths);

  const replaceMatrix = {
    jest: [
      ["/*", "/(.*)$"],
      ["./", "<rootDir>/"],
      ["/*", "/$1"],
    ],
    babel: [
      ["/*", ""],
      ["./", `${BASE_DIR}/`],
      ["/*", ""],
    ],
  };

  if (mode in replaceMatrix) {
    return pathsKeys.reduce((acc, item) => {
      const newItem = {
        [item.replace(...replaceMatrix[mode][0])]: paths[item][0]
          .replace(...replaceMatrix[mode][1])
          .replace(...replaceMatrix[mode][2]),
      };

      return {
        ...acc,
        ...newItem,
      };
    }, {});
  }

  throw new Error(`Only modes are "babel" and "jest".`);
};
