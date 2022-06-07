module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb-base',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'max-len': 0,
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    semi: ['error', 'never'], // 禁止分号
    'no-unused-vars': 0, // 未使用的变量，需配合下面的规则使用
    '@typescript-eslint/no-unused-vars': ['error'], // 未使用的变量
    'import/extensions': 0, // 导入要加后缀 .js
    'import/no-unresolved': 0, // 不能使用 ./ 或者 ../
    '@typescript-eslint/triple-slash-reference': 0, // /// <reference types="node" />
    'class-methods-use-this': 0,
    'no-shadow': 0,
    'no-plusplus': 0, // 允许 i++
    'prefer-promise-reject-errors': 0, // 可以使用 Promise.reject(value)
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/prop-types': 0, // 必须要写props type
    'import/order': 0, // 导入顺序
    'no-unused-expressions': 0, // 可以使用 a && a()
    'object-curly-newline': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/display-name': 0,
    'import/prefer-default-export': 0,
    'no-undef': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
}
