module.exports = {
  root: true,
  extends: [
    'prettier',
    'react-app',
    'react-app/jest'
  ],
  plugins: [
    'prettier',
    'import-helpers'
  ],
  rules: {
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true, 'allowTemplateLiterals': false }
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          '/^react/',
          'module',
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ]
  }
};
