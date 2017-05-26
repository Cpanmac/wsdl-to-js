var Modeler = require("../Modeler.js");
var className = 'Elementstring';

var Elementstring = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  string: {
      type: "string",
      wsdlDefinition: {
        name: "string",
        nillable: "true",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Elementstring;
Modeler.register(Elementstring, "Elementstring");
