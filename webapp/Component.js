sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel',
	'sap/f/library'
], function (UIComponent, JSONModel, fioriLibrary) {
	'use strict';

	return UIComponent.extend('sap.ui.demo.fiori2.Component', {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			var oModel,
				oRouter;
			// var oProductsModel;

			UIComponent.prototype.init.apply(this, arguments);

			oRouter = this.getRouter();
			// oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();

		}
		// _onBeforeRouteMatched: function (oEvent) {
		// 	var oModel = this.getModel(),
		// 		sLayout = oEvent.getParameters().arguments.layout;
		// 	debugger;

		// 	// If there is no layout parameter, set a default layout (normally OneColumn)
		// 	if (!sLayout) {
		// 		sLayout = fioriLibrary.LayoutType.OneColumn;
		// 	}

		// 	oModel.setProperty("/layout", sLayout);
		// }
	});
});