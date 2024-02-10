/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "@remix-run/eslint-config", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
