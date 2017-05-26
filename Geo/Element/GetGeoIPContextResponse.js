var Modeler = require("../Modeler.js");
var className = 'ElementGetGeoIPContextResponse';

var ElementGetGeoIPContextResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetGeoIPContextResult: {
      type: "TypeGeoIP",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "GetGeoIPContextResult",
        type: "tns:GeoIP"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetGeoIPContextResponse;
Modeler.register(ElementGetGeoIPContextResponse, "ElementGetGeoIPContextResponse");
