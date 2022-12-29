sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/f/library'
], function (Controller, fioriLibrary) {
    'use strict';
    return Controller.extend("sap.ui.demo.fiori2.controller.Detail", {
        onInit: function () {


			this.oRouter = this.getOwnerComponent().getRouter();
            this.oModel = this.getOwnerComponent().getModel();

			this.oRouter.getRoute("master").attachMatched(this.herculis, this);
			this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
        },
        handleFullScreen: function () {
            debugger;
            this.getView().getModel("nav").setProperty("/layout", sap.f.LayoutType.MidColumnFullScreen);
            this.getView().byId("open").setVisible(false)
            this.getView().byId("exit").setVisible(true)
			// var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
			this.oRouter.navTo("detail");
		},

		handleExitFullScreen: function () {
            debugger;

            this.getView().byId("open").setVisible(true)
            this.getView().byId("exit").setVisible(false)

            this.getView().getModel("nav").setProperty("/layout", sap.f.LayoutType.TwoColumnsMidExpanded);
			// var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
			this.oRouter.navTo("detail");
		},
        herculis: function (oEvent) {
            debugger;

            var sIndex = oEvent.getParameter("arguments").layout;
            //step 2: construct the path for element binding
            var sPath = '/' + sIndex;
            //Step 3: perform the element binding with current view
            this.getView().bindElement(sPath);

            // this._product = oEvent.getParameter("arguments").layout || this._product || "0";
			// this.getView().bindElement({
			// 	path: "/" + this._product
			// });
        },
        
        onBack: function () {
			debugger;
            // var oFCL = this.getView().getParent().getParent();

            // oFCL.setLayout(fioriLibrary.LayoutType.OneColumn);
            this.getView().getModel("nav").setProperty("/layout", sap.f.LayoutType.OneColumn);
            
			this.oRouter.navTo("master");
        }
    });
}); 