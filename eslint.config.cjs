const {defineConfig} = require('eslint/config');

const globals = require('globals');
const parser = require('vue-eslint-parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const js = require('@eslint/js');

const {FlatCompat} = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = defineConfig([
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: parser,
            ecmaVersion: 2020,
            sourceType: 'module',

            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },

        extends: compat.extends(
            'eslint:recommended',
            'plugin:vue/vue3-recommended',
            'plugin:@typescript-eslint/recommended'
        ),

        rules: {
            'no-relative-imports/no-relative-imports': 'error',

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                },
            ],

            'vue/multi-word-component-names': 'off',

            'brace-style': [
                'error',
                'allman',
                {
                    allowSingleLine: false,
                },
            ],

            'array-element-newline': ['error', 'always', {minItems: 2}],
            'object-property-newline': ['error', 'always'],
        },

        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
    },
]);
