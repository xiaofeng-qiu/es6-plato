'use strict';

var ESLINT = require('eslint').SourceCode;
var esLintCli = require('eslint').linter;

exports.process = function(source, options /*, reportInfo */ ) {
	if (options == null || Object.getOwnPropertyNames(options).length === 0) {
		options = {
			options: {},
			globals: {}
		};
		var esLintOptions = esLintCli.getConfig(source);
		if (esLintOptions != null && Object.getOwnPropertyNames(esLintOptions).length > 0) {
			if (esLintOptions.globals) {
				options.globals = esLintOptions.globals;
				delete esLintOptions.globals;
			}
			options.options = esLintOptions;
		}
	}

	var results = lint(source, options.options, options.globals);
	var report = generateReport(results);
	return report;
};

function generateReport(data) {

	var out = {
		messages: []
	};

	data.results.forEach(function(result) {
		out.messages.push({
			severity: 'error',
			line: result.error.line,
			column: result.error.character,
			message: result.error.reason,
			source: result.error.raw
		});
	});

	return out;
}

function lint(source, config, globals) {
	config = config || {};

	var results = [];
	var data = [];

  // Remove potential Unicode BOM.
	source = source.replace(/^\uFEFF/, '');

	if (!ESLINT(source, config, globals)) {
		ESLINT.errors.forEach(function(err) {
			if (err) {
				results.push({
					error: err
				});
			}
		});
	}

	var lintData = ESLINT.data();
	if (lintData) data.push(lintData);

	return {
		results: results,
		data: data
	};
}
