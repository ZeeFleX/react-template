module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  globals: {
    JSX: 'readonly'
  },
  rules: {
    'no-unused-vars': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error']
  }
};
