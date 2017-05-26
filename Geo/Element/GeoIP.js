var Modeler = require("../Modeler.js");
var className = 'ElementGeoIP';

var ElementGeoIP = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GeoIP: {
      type: "TypeGeoIP",
      wsdlDefinition: {
        name: "GeoIP",
        nillable: "true",
        type: "tns:GeoIP"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGeoIP;
Modeler.register(ElementGeoIP, "ElementGeoIP");
