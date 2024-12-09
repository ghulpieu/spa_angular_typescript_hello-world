// @ts-check

const eslint = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');
const angular = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    // register all of the plugins up-front
    plugins: {
      // note - intentionally uses computed property syntax to make it easy to sort the keys

      // @ts-ignore
      ['@stylistic']: stylistic,
      ['@typescript-eslint']: tseslint.plugin,
    },
    // config with just ignores is the replacement for '.eslintignore'
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/jest.config.js',
    ],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintPluginPrettierRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_',
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          'default': {
            'memberTypes': [
              'public-decorated-field',
              'protected-decorated-field',
              'private-decorated-field',
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'public-instance-field',
              'public-abstract-field',
              'protected-instance-field',
              'protected-abstract-field',
              'private-instance-field',
              // 'private-abstract-field',
              'static-field',
              'public-field',
              'instance-field',
              'protected-field',
              'private-field',
              'abstract-field',
              'constructor',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'public-method',
              'protected-method',
              'private-method'
            ]
          }
        }
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always'
      ],
      '@stylistic/template-curly-spacing': [
        'error',
        'never'
      ],
    },
  },
  // NOTE: WE ARE NOT APPLYING PRETTIER IN THIS OVERRIDE, ONLY @ANGULAR-ESLINT TEMPLATE
  {
    files: ['**/*.html'],
    // register all of the plugins up-front
    plugins: {
      // note - intentionally uses computed syntax to make it easy to sort the keys

      ['@stylistic']: stylistic,
    },
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/node_modules/**',
    ],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@stylistic/object-curly-spacing': [
        'error',
        'always'
      ],
      '@stylistic/template-curly-spacing': [
        'error',
        'always'
      ],
      '@angular-eslint/template/eqeqeq': 'off'
    },
  },
  // NOTE: WE ARE NOT APPLYING @ANGULAR-ESLINT/TEMPLATE IN THIS OVERRIDE, ONLY PRETTIER
  {
    files: ['**/*.html'],
    ignores: [
      '*inline-template-*.component.html',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/node_modules/**',
    ],
    extends: [
      eslintPluginPrettierRecommended,
    ],
    // NOTE: WE ARE OVERRIDING THE DEFAULT CONFIG TO ALWAYS SET THE PARSER TO ANGULAR (SEE BELOW)
    rules: {
      'prettier/prettier': [
        'error',
        {
          'parser': 'angular'
        }
      ]
    }
  }
);
