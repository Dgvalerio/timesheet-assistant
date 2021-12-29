module.exports = {
  root: true,
  extends: [
    'google',
    'prettier',
    'react-app',
    'react-app/jest',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'import-helpers', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
};
