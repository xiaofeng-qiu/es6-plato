'use strict';

var ESLINT = require('eslint').SourceCode;
var esLintCli = require('eslint').linter;

function process(source, options /*, reportInfo */ ) {
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
}

function generateReport(data) {
	var out = {
		messages: []
	};

	function addResultToMessages(result) {
		out.messages.push({
			severity: 'error',
			line: result.error.line,
			column: result.error.character,
			message: result.error.reason,
			source: result.error.raw
		});
	}

	data.results.forEach(addResultToMessages);
	return out;
}

function lint(source, config, globals) {
	config = config || {};

	var results = [];
	var data = [];

	function addErrorToResults(err) {
		if (err) {
			results.push({
				error: err
			});
		}
	}

  // Remove potential Unicode BOM.
	source = source.replace(/^\uFEFF/, '');

	if (!ESLINT(source, config, globals)) {
		ESLINT.errors.forEach(addErrorToResults);
	}

	var lintData = ESLINT.data();
	if (lintData) {data.push(lintData);}

	return {
		results: results,
		data: data
	};
}

exports.process = process;
