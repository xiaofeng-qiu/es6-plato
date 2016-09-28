const eslintBase = {
	'rules': {
		'indent': [2,'tab'],
		'quotes': [2,'single'],
		'semi': [2,'always'],
		'no-console' : [1],
		'curly': ['error'],
		'no-dupe-keys': 2,
		'func-names': [1, 'always']
	},
	'env': {
		'es6': true,
		'browser': true
	},
	'globals': {
		'__dirname' : true,
		'module' : true,
		'exports' : true,
		'process' : true,
		'require' : true
	},
	'parserOptions' :{
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
			'experimentalObjectRestSpread': true,
			'modules': true
		}
	}
};

module.exports = eslintBase;
