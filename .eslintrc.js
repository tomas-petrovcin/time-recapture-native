module.exports = {
  root: true,
  plugins: ['import'],
  extends: ['@react-native', 'plugin:import/errors', 'plugin:import/warnings'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@lib/components', './lib/components'],
          ['@lib/features', './lib/features'],
          ['@lib/pages', './lib/pages'],
          ['@lib/utils', './lib/utils'],
          ['@lib/api', './lib/api'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    curly: 'off',
    'import/namespace': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-**',
            group: 'external',
            position: 'before',
          },
          // { pattern: '@styled**', group: 'external' },

          { pattern: '@lib**', group: 'internal' },
          { pattern: '@lib/pages', group: 'internal' },
          { pattern: '@lib/features', group: 'internal' },
          { pattern: '@lib/components', group: 'internal' },
          { pattern: '@lib/**', group: 'internal' },

          {
            pattern: '*+(styled|.styled)',
            patternOptions: { matchBase: true },
            group: 'index',
          },
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
};
