jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/integrata/fioi/curd/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/integrata/fioi/curd/test/integration/pages/App",
	"de/integrata/fioi/curd/test/integration/pages/Browser",
	"de/integrata/fioi/curd/test/integration/pages/Master",
	"de/integrata/fioi/curd/test/integration/pages/Detail",
	"de/integrata/fioi/curd/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.integrata.fioi.curd.view."
	});

	sap.ui.require([
		"de/integrata/fioi/curd/test/integration/NavigationJourneyPhone",
		"de/integrata/fioi/curd/test/integration/NotFoundJourneyPhone",
		"de/integrata/fioi/curd/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});