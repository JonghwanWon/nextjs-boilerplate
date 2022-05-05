module.exports = (api) => {
  const isProd = api.cache(() => process.env.NODE_ENV === 'production');
  return {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            targets: {
              browsers: ['cover 99.5%', 'not ie <= 10'],
            },
          },
          'transform-runtime': {
            corejs: 3,
          },
        },
      ],
    ],
  };
};
