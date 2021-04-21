module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/prefer-default-export": "off",
    "prettier/prettier": ["error"],
  },
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
};
