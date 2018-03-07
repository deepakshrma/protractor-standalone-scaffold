const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const reporter = require('cucumber-html-reporter');

const { NODE_ENV }  = process.env;
const PLATFORM = `${process.platform}-${process.arch}`;
const pathBuilder = path.join.bind(path, __dirname);

exports.getSpecs = (pattern) => {
	if (!(pattern instanceof RegExp)) {
		pattern = new RegExp(pattern, 'gi');
	}
	const files = fs.readdirSync(path.resolve(__dirname, 'specs'))
		.filter((filename) => {
			return pattern.test(filename)
		})
		.map(filename => path.resolve(__dirname, 'specs', filename));
	return files;
};
exports.ensureDirSync = (absPath) => {
	try {
		const isExist = fs.existsSync(absPath);
		if (!isExist) {
			fs.mkdirSync(absPath);
		}
	} catch (e) {
		console.error('Error while creating dir', e);
	}
};
exports.cleanDir = (dir, cb) => {
	const isExist = fs.existsSync(dir);
	if(isExist){
		return rimraf(path.resolve(__dirname, dir), cb);
	}
	return cb(null);
};

const envMetaData = () => {
	return {
		"App Version": "5.1.0",
		"Test Environment": NODE_ENV || 'dev',
		"Browser": "Chrome  59.0.2840.98",
		"Platform": PLATFORM,
		"Parallel": "Scenarios",
		"Executed": "Remote"
	}
};
exports.CucumberHtmlReporter = (jsonReportFile, htmlReportFile) => {
	const options = {
		theme: 'simple',
		jsonFile: jsonReportFile,
		output: htmlReportFile,
		reportSuiteAsScenarios: true,
		launchReport: true,
		metadata: envMetaData() //not works only in simple theme
	};
	return reporter.generate(options);
};
exports.pathBuilder =  pathBuilder;