var Modeler = require("../Modeler.js");
var className = 'ElementGetWeather';

var ElementGetWeather = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  CityName: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "CityName",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
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

module.exports = ElementGetWeather;
Modeler.register(ElementGetWeather, "ElementGetWeather");
