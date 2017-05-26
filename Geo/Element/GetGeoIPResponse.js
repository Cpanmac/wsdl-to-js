var Modeler = require("../Modeler.js");
var className = 'ElementGetGeoIPResponse';

var ElementGetGeoIPResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetGeoIPResult: {
      type: "TypeGeoIP",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "GetGeoIPResult",
        type: "tns:GeoIP"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetGeoIPResponse;
Modeler.register(ElementGetGeoIPResponse, "ElementGetGeoIPResponse");
