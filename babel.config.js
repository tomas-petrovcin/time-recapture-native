module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@lib/components': './lib/components',
          '@lib/features': './lib/features',
          '@lib/pages': './lib/pages',
          '@lib/utils': './lib/utils',
          '@lib/api': './lib/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
