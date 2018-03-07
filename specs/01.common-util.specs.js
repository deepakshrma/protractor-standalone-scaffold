const utils = require('./common/utils');

describe('Common-util specs test', function () {
	it('should abale to test utils', function () {
		expect(utils.someValue).toEqual('SOME_VALUE');
		expect(utils.someUtilFunction()).toEqual('working fine');
		expect(utils.otherUtilFunction()).toEqual('other is also working fine');
	});
});