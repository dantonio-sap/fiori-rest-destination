sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("fiorirestdestination.controller.View1", {
            onInit: function () {

            },

            onPressGo: function () {
                const oTxtResult = this.getView().byId("txtResult");
                oTxtResult.setText("");
                oTxtResult.setBusy(true);

                setTimeout(this._callAPI(oTxtResult), 0);
            },

            _callAPI: function (oTxtResult) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', '/ariba/api/sourcing-approval/v2/prod/ContractWorkspace/CW4698?realm=foulath-t');
                xhr.responseType = 'json';
                xhr.setRequestHeader('apiKey', 'nMsCtbmNXtdpur1vpn3L2jr0DShp6D2E');
                xhr.send();

                xhr.onload = () => {
                    // get JSON response
                    const response = xhr.response;
                    console.log(response);

                    oTxtResult.setBusy(false);
                    oTxtResult.setText(JSON.stringify(response, null, 2));
                }
            }
        });
    });
