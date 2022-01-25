module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@src': './src/',
            '@assets': './assets/',
            '@components': './src/components/',
            '@services': './src/services/',
            '@router': './src/router/',
            '@screens': './src/screens/',
            '@config': './src/config/',
            '@shared': './src/shared',
            '@interfaces': './src/shared/interfaces',
            '@context': './src/context',
          },
        },
      ],
      'react-native-reanimated/plugin'
    ],
  };
};
