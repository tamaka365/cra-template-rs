module.exports = (config, options) => {
  const loader = config.module.rules[1].oneOf.find(
    ({ test }) => String(test) === String(/\.(js|mjs|jsx|ts|tsx)$/)
  );

  loader.use = [
    {
      loader: require.resolve('./replace-str-loader'),
      options,
    },
    {
      loader: loader.loader,
      options: { ...loader.options },
    },
  ];

  delete loader.loader;
  delete loader.options;

  return config;
};
