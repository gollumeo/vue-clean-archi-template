import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // 1. JS recommandé
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },
        rules: js.configs.recommended.rules
    },

    // 2. Règles globales + style
    {
        files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,vue}"],
        ignores: [
            "node_modules/**",
            "dist/**"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },
        rules: {
            "brace-style": [
                "error",
                "allman"
            ],
            "array-bracket-newline": [
                "error",
                { "minItems": 2 }
            ],
            "array-element-newline": [
                "error",
                { "minItems": 2 }
            ],
            "object-curly-spacing": [
                "error",
                "always"
            ],
            "indent": "off"
        }
    },

    // 3. TypeScript recommandé (sans plugin)
    {
        files: ["**/*.{ts,tsx,vue}"],
        languageOptions: {
            parser: tsParser
        },
        plugins: {
            "@typescript-eslint": tsPlugin
        },
        rules: tsPlugin.configs.recommended.rules
    },

    // 4. Vue essential + parser
    ...pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser
            }
        }
    }
]);
