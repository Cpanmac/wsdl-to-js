var Modeler = require("../Modeler.js");
var className = 'ElementGetCitiesByCountry';

var ElementGetCitiesByCountry = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CountryName: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "CountryName",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetCitiesByCountry;
Modeler.register(ElementGetCitiesByCountry, "ElementGetCitiesByCountry");
