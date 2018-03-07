var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
	this.Given(/^I run Cucumber with Protractor$/, function(next) {
		next();
	});

	this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
		browser.get(url);
		next();
	});

	this.Then(/^it should still do normal tests$/, function(next) {
		expect(true).to.equal(true);
		next();
	});
	this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
		expect(browser.getTitle())
			.to.eventually.equal(text)
			.and.notify(next);
	});

};