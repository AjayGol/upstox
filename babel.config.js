module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-private-methods', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@screen': './src/screen',
          '@api': './src/api',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
