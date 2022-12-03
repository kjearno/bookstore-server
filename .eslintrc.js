module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "import/no-unresolved": [2, { commonjs: true }],
  },
  settings: {
    "import/resolver": {
      alias: [
        ["@features", "./features"],
        ["@lib", "./lib"],
      ],
    },
  },
};
