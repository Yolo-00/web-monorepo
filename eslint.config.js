import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

const ignores = ["node_modules", "dist", "**/node_modules", "**/dist"];

export default defineConfig({
  ignores,
  plugins: {
    "@typescript-eslint": typescriptPlugin,
    prettier: prettierPlugin
  },
  files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: tseslint.parser, // 已经是 typescript-eslint 自带 parser
    globals: {
      ...globals.browser
    }
  },
  rules: {
    // 展开推荐规则
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended[0].rules, // 注意：tseslint.configs.recommended 是数组
    ...typescriptPlugin.configs.recommended.rules,
    ...eslintConfigPrettier.rules,

    // 自定义规则
    "no-var": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "prefer-const": "warn",
    "no-use-before-define": "warn",

    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }
    ],
    "@typescript-eslint/no-explicit-any": "warn"
  }
});
