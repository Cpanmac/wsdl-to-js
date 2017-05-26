var Modeler = require("../Modeler.js");
var className = 'ElementGetGeoIP';

var ElementGetGeoIP = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  IPAddress: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "IPAddress",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetGeoIP;
Modeler.register(ElementGetGeoIP, "ElementGetGeoIP");
