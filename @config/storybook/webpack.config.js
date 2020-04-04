const webpack = require("../webpack/dev");

module.exports = ({ config }) => {
  config.module.rules.push(webpack.module.rules[0]);
  config.resolve = { ...config.resolve, ...webpack.resolve };

  return config;
};
