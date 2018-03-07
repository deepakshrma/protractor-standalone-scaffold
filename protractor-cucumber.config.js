const path = require('path');
const {pathBuilder, ensureDirSync, CucumberHtmlReporter} = require('./helpers');

const {config} = require('./protractor.conf');

const cucumberReportDirectory = 'e2e_reports/cucumber';
const jsonReportFile = cucumberReportDirectory + '/cucumber_report.json';
const htmlReportFile = cucumberReportDirectory + '/cucumber_report.html';
// Create cucumber dir if doesn't exist
ensureDirSync(path.resolve(cucumberReportDirectory));

exports.config = Object.assign({}, config, {
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	specs: [
		pathBuilder('cucumber/**/*.feature')
	],
	cucumberOpts: {
		require: [
			pathBuilder('cucumber/**/*.specs.js')
		],
		format: ['json:./' + jsonReportFile],
		keepAlive: false,
		timeout: 40000000,
		defaultTimeoutInterval: 40000000
	},
	onPrepare() {
		return browser.driver.get(config.baseUrl).then(() => {
			browser.manage().timeouts().implicitlyWait(5000);
			browser.manage().window().maximize();
		});
	},
	onCleanUp: function () {
		return CucumberHtmlReporter(jsonReportFile, htmlReportFile);
	}
});