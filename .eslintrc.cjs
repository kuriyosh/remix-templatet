/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "@remix-run/eslint-config", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroupsExcludedImportTypes: [],
        alphabetize: { order: "asc" },
        "newlines-between": "never",
      },
    ],
  },
};
