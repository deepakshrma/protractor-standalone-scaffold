const SIDE_BAR = element(by.css('cst-sidebar'));
const COMBO_BOX = element(by.css('cst-combobox'));

module.exports = {
	SIDE_BAR: SIDE_BAR,
	SIDE_BARS: {
		SELECT: SIDE_BAR.element(by.css('ul>li>a[href="#/components/dropdowns"]')),
	},
	COMBO_BOX: COMBO_BOX,
	COMBO_BOX_LINK: COMBO_BOX.element(by.css('span .cst-i-arrow-s')),
	COMBO_BOX_LIST: {
		BASKETBALL: element(by.css('cst-popup ul>li:nth-child(2)')),
		CRICKET: element(by.css('cst-popup ul>li:nth-child(3)'))
	}
};