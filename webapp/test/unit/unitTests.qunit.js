/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fiori-rest-destination/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
