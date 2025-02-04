module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ['react', 'prettier', 'react-native'],
  rules: {
    'prettier/prettier': 'error',
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
