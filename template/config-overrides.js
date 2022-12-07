const injectMode = require('./cra-inject-mode');

module.exports = function override(config, env) {
  return injectMode(config, {
    __MODE__: process.env.REACT_APP_MODE || env,
  });
};
