/**
 * @createAt: 27/02/2018
 * @author: Deepak V<deepak@dbs.com>
 */
const {SpecReporter} = require('jasmine-spec-reporter');
const {pathBuilder, cleanDir, ensureDirSync} = require('./helpers');
const getScreenshotReport = () => {
	const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
	const screenshotReporter = new HtmlScreenshotReporter({
		dest: 'e2e_reports/html',
		userCss: 'e2e_reports/style/default.css',
		filename: 'index.html'
	});
	process.on('uncaughtException', function () {
		screenshotReporter.jasmineDone();
		screenshotReporter.afterLaunch();
	});
	return screenshotReporter;
};
const baseUrl = 'http://juliemr.github.io/protractor-demo/';
exports.config = {
	baseUrl: baseUrl,
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: pathBuilder('specs/**/*.specs.js'),
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 400000,
		print: function () {
		}
	},
	onPrepare() {
		cleanDir('e2e_reports', () => ensureDirSync('e2e_reports'));
		return browser.driver.get(baseUrl).then(() => {
			jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
			jasmine.getEnv().addReporter(getScreenshotReport());
			browser.manage().timeouts().implicitlyWait(5000);
			browser.manage().window().maximize();
		});
	}
};