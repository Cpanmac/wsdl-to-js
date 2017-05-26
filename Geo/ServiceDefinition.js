module.exports = {
  "GeoIPServiceSoap": {
    "namespace": "http://www.webservicex.net/",
    "serviceUrl": "http://www.webservicex.net/geoipservice.asmx",
    "GetGeoIP": {
      "soapAction": "http://www.webservicex.net/GetGeoIP",
      "input": "ElementGetGeoIP",
      "output": "ElementGetGeoIPResponse"
    },
    "GetGeoIPContext": {
      "soapAction": "http://www.webservicex.net/GetGeoIPContext",
      "input": "ElementGetGeoIPContext",
      "output": "ElementGetGeoIPContextResponse"
    }
  }
}