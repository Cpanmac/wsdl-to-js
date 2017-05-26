var Modeler = require("../Modeler.js");
var className = 'TypeGeoIP';

var TypeGeoIP = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ReturnCode: {
      type: "number",
      wsdlDefinition: {
        minOccurs: "1",
        maxOccurs: "1",
        name: "ReturnCode",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    IP: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "IP",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReturnCodeDetails: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "ReturnCodeDetails",
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
    },
    CountryCode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: "0",
        maxOccurs: "1",
        name: "CountryCode",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeGeoIP;
Modeler.register(TypeGeoIP, "TypeGeoIP");
