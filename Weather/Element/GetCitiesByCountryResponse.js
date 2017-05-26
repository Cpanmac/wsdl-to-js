var Modeler = require("../Modeler.js");
var className = 'ElementGetCitiesByCountryResponse';

var ElementGetCitiesByCountryResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetCitiesByCountryResult: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "GetCitiesByCountryResult",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetCitiesByCountryResponse;
Modeler.register(ElementGetCitiesByCountryResponse, "ElementGetCitiesByCountryResponse");
