var Modeler = require("../Modeler.js");
var className = 'ElementGetGeoIPContext';

var ElementGetGeoIPContext = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  undefined: {
      type: "string",
      wsdlDefinition: {
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetGeoIPContext;
Modeler.register(ElementGetGeoIPContext, "ElementGetGeoIPContext");
