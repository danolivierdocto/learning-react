module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['flowtype', 'react', 'prettier', 'standard'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  parser: 'babel-eslint',
}
