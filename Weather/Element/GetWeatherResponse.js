var Modeler = require("../Modeler.js");
var className = 'ElementGetWeatherResponse';

var ElementGetWeatherResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  GetWeatherResult: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "GetWeatherResult",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGetWeatherResponse;
Modeler.register(ElementGetWeatherResponse, "ElementGetWeatherResponse");
