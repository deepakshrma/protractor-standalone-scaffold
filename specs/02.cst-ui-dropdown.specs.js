// Sample spec.js
const navBarPage = require('./pages/navbar.page.js');
const componentsPage = require('./pages/components.page.js');

describe('Cst components App', function () {
	it('should have a navbar tab with name Components', function () {
		navBarPage.COMPONENTS.click();
		expect(navBarPage.COMPONENTS.getText()).toEqual('Components');
	});
	it('should have a sidebar tab with name Select', function () {
		expect(componentsPage.SIDE_BARS.SELECT.getText()).toEqual('Select');
	});
	it('should able to click combobox cricket', function () {
		componentsPage.SIDE_BARS.SELECT.click();
		componentsPage.COMBO_BOX_LINK.click();
		browser.wait(() => {
			return componentsPage.COMBO_BOX_LIST.CRICKET.isPresent();
		}).then(() => {
			expect(componentsPage.COMBO_BOX_LIST.CRICKET.getText()).toEqual('Cricket');
			componentsPage.COMBO_BOX_LIST.CRICKET.click();
		});
	});
});