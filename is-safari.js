// Thanks http://stackoverflow.com/a/9851769

'use strict';

module.exports = (function () {
	if ((typeof HTMLElement !== 'object') || !HTMLElement) return false;
	return Object.prototype.toString.call(HTMLElement).indexOf('Constructor') > 0;
}());
