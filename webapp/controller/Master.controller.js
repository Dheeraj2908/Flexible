sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "sap/m/MessageBox",
    "sap/f/library"
], function (Controller, Filter, FilterOperator, Sorter, MessageBox, fioriLibrary) {
    "use strict";

    return Controller.extend("sap.ui.demo.fiori2.controller.Master", {
        onInit: function () {

            this.oModel = this.getView().getModel();
            this.oRouter = this.getOwnerComponent().getRouter();
            // this.oRouter.getRoute("master").attachMatched(this.herculis, this);
        
        },
        // herculis: function (oEvent) {
        //     debugger;

        //     var sIndex = oEvent.getParameter("arguments").layout;
        //     //step 2: construct the path for element binding
        //     var sPath = '/' + sIndex;
        //     //Step 3: perform the element binding with current view
        //     this.getView().bindElement(sPath);

        //     // this._product = oEvent.getParameter("arguments").layout || this._product || "0";
		// 	// this.getView().bindElement({
		// 	// 	path: "/" + this._product
		// 	// });
        // },

        onSearch: function (oEvent) {

            debugger;

            var val1 = this.getView().byId("get").getValue();
            var val2 = this.getView().byId("give").getValue();
            var val3 = this.getView().byId("fetch").getValue();
            var val4 = this.getView().byId("call").getValue();


            var oFilter1 = new Filter("CompanyName", FilterOperator.Contains, val1);
            var oFilter2 = new Filter("ContactName", FilterOperator.Contains, val2);
            var oFilter3 = new Filter("City", FilterOperator.Contains, val3);
            var oFilter4 = new Filter("Country", FilterOperator.Contains, val4);


            var oDataFilter = new Filter({
                filters: [oFilter1, oFilter2, oFilter3, oFilter4],
                and: true
            });

            // debugger;

            //Step 3: Inject this filter inside the List to filter items
            this.getView().byId("tab").getBinding("items").filter(oDataFilter);

        },

        onSelectItem: function (oEvent) {
            // var oFCL = this.getView().getParent().getParent();

            // oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
            
            debugger;

            this.getView().getModel("nav").setProperty("/layout", sap.f.LayoutType.TwoColumnsMidExpanded);


            var oSelectedItem = oEvent.getParameter("listItem");
            //Step 2: Get the path of the element of this item
            var sPath = oSelectedItem.getBindingContextPath();

            var sIndex = sPath.split("/")[sPath.split("/").length - 1];

            this.oRouter.navTo("master",{
                layout: sIndex
            });
        }
    });
});
