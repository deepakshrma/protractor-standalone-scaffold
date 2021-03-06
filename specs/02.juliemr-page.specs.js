// Sample spec.js
const {
	FIRST_ELEMENT,
	SECOND_ELEMENT,
	GO_BTN,
	LATEST_BTN
} = require('./pages/home.page');

// Sample spec.js
describe('Protractor Demo App', function () {
	const firstNumber = FIRST_ELEMENT;
	const secondNumber = SECOND_ELEMENT;
	const goButton = GO_BTN;
	const latestResult = LATEST_BTN;
	it('should have a title', function () {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
	it('should add one and two', function () {
		firstNumber.sendKeys(1);
		secondNumber.sendKeys(2);
		goButton.click();
		expect(latestResult.getText()).toEqual('3');
	});
	it('should add four and six', function () {
		// Fill this in.
		expect(latestResult.getText()).toEqual('10');
	});
	it('should read the value from an input', function () {
		firstNumber.sendKeys(1);
		expect(firstNumber.getAttribute('value')).toEqual('1');
	});
});