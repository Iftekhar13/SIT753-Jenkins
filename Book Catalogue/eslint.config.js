const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    ignores: ["node_modules/**", "coverage/**"],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];