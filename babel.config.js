module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-unistyles/plugin', {
        root: 'app',
        autoProcessImports: ['@react-native-ui-kit', '@codemask/styles'],
        autoProcessPaths: ['external-library/components'],
        debug: true,
      }],
      ['react-native-reanimated/plugin'],
      'babel-plugin-react-compiler',
    ]
  };
};
