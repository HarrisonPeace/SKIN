module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    'react/display-name': 'off',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^'],
          ['react-icons'],
          ['@material-tailwind'],
          ['^@/components'],
          ['^@/lib'],
          ['^@/utils'],
          ['^@/'],
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
}
