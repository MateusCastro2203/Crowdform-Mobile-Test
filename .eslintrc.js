module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "max-len": ["warn", { code: 80, ignoreComments: true }],
  },
};
