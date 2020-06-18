const plugins = [
  'import',
  'jest',
  'json',
  'jsx-a11y',
  'promise',
  'react-hooks',
  'react',
  'unicorn',
]

const extendedConfigs = [
  'eslint:recommended',
  'plugin:unicorn/recommended',
  'plugin:react/recommended',
  'plugin:json/recommended',
  'plugin:promise/recommended',
  'plugin:jest/recommended',
  'plugin:jest/style',
  'airbnb',
  'airbnb/hooks',
]

const rules = {
  semi: ['warn', 'never'],
  'arrow-parens': ['warn', 'as-needed'],
  'max-len': ['error', { code: 120 }],
  'unicorn/filename-case': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/no-null': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
  'import/extensions': ['error', 'never'],
  'react/jsx-one-expression-per-line': 'off',
  'react/react-in-jsx-scope': 'off',
  'unicorn/no-reduce': 'off',
}

module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins,
  extends: extendedConfigs,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: [
        '**/*.ts?(x)',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: [
        ...plugins,
        '@typescript-eslint',
      ],
      extends: [
        ...extendedConfigs,
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
      ],
      rules: {
        ...rules,
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off', // problematic. TS reports it anyway
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        semi: 'off',
        '@typescript-eslint/semi': rules.semi,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn', // https://github.com/typescript-eslint/typescript-eslint/issues/1856
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
      },
    },
  ],
  rules,
}
