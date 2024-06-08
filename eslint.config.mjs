import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node, ...globals.jest },
    },
    env: { jest: true },
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
