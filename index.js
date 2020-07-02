const plugins = [
	'deprecation',
	'import',
	'jest',
	'jest-dom',
	'json',
	'jsx-a11y',
	'promise',
	'react',
	'react-hooks',
	'security',
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
	'plugin:import/errors',
	'plugin:import/warnings',
]

const rules = {
	indent: ['warn', 'tab', { MemberExpression: 1 }],
	semi: ['warn', 'never'],
	'no-tabs': 'off',
	'eol-last': ["warn", "always"],
	'no-trailing-spaces': 'warn',
	'comma-dangle': ['warn', 'always'],
	'arrow-parens': ['warn', 'as-needed'],
	'comma-dangle': ['warn', {
		'arrays': 'always-multiline',
		'objects': 'always-multiline',
		'imports': 'always-multiline',
		'exports': 'always-multiline',
		'functions': 'never',
	}],
	quotes: ['warn', 'single', {
		'allowTemplateLiterals': false,
		'avoidEscape': true,
	}],
	'max-len': ['warn', { code: 120 }],
	'no-shadow': 'warn',
	'no-console': 'warn',
	'implicit-arrow-linebreak': 'off',
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
	'react/jsx-indent': ['warn', 'tab', {checkAttributes: true, indentLogicalExpressions: true}],
	'object-curly-newline': ['error', {
		ObjectExpression: { multiline: true, consistent: true },
		ObjectPattern: { multiline: true, consistent: true },
		ImportDeclaration: { multiline: true, consistent: true },
		ExportDeclaration: { multiline: true, consistent: true },
	}],
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
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {}
		},
		'import/extensions': [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
		],
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
				'airbnb-typescript',
				'airbnb/hooks',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:import/typescript',
			],
			rules: {
				...rules,
				'max-len': rules['max-len'],
				'@typescript-eslint/indent': rules['indent'],
				'@typescript-eslint/semi': rules['semi'],
				'@typescript-eslint/semi': rules['semi'],
				'@typescript-eslint/consistent-type-assertions': 'warn',
				'@typescript-eslint/no-array-constructor': 'warn',
				'@typescript-eslint/no-use-before-define': [
					'warn', // https://github.com/typescript-eslint/typescript-eslint/issues/1856
					{
						functions: false,
						classes: false,
						variables: false,
						typedefs: false,
					},
				],
				"deprecation/deprecation": "warn"
			},
		},
		{
			files: [
				'**/*.spec.ts?(x)',
				'**/*.test.ts?(x)',
				'**/*.specs.ts?(x)',
				'**/*.tests.ts?(x)',
			],
			rules: {
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
			}
		}
	],
	rules,
}
