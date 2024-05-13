import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      semi: "error",
      "no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.jsx"],
    rules: {
      "no-undef": "error",
      semi: "warn",
    },
  },
];
