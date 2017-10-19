jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 FlugkundenSet in the list
// * All 3 FlugkundenSet have at least one Buchungen

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/integrata/fioi/curd/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/integrata/fioi/curd/test/integration/pages/App",
	"de/integrata/fioi/curd/test/integration/pages/Browser",
	"de/integrata/fioi/curd/test/integration/pages/Master",
	"de/integrata/fioi/curd/test/integration/pages/Detail",
	"de/integrata/fioi/curd/test/integration/pages/Create",
	"de/integrata/fioi/curd/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.integrata.fioi.curd.view."
	});

	sap.ui.require([
		"de/integrata/fioi/curd/test/integration/MasterJourney",
		"de/integrata/fioi/curd/test/integration/NavigationJourney",
		"de/integrata/fioi/curd/test/integration/NotFoundJourney",
		"de/integrata/fioi/curd/test/integration/BusyJourney",
		"de/integrata/fioi/curd/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});