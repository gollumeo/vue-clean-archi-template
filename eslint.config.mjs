import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },
        rules: js.configs.recommended.rules
    },

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
            "indent": [
                "error",
                4,
                {
                    "SwitchCase": 1,
                    "outerIIFEBody": 1,
                    "FunctionDeclaration": {
                        "parameters": "first",
                        "body": 1
                    },
                    "FunctionExpression": {
                        "parameters": "first",
                        "body": 1
                    },
                    "CallExpression": {
                        "arguments": "first"
                    },
                    "ignoredNodes": ["TemplateLiteral *"],
                    "flatTernaryExpressions": false,
                    "ignoreComments": false
                }
            ]
        }
    },

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
