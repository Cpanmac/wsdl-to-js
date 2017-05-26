module.exports = {
  "GlobalWeatherSoap": {
    "namespace": "http://www.webserviceX.NET",
    "serviceUrl": "http://www.webservicex.com/globalweather.asmx",
    "GetWeather": {
      "soapAction": "http://www.webserviceX.NET/GetWeather",
      "input": "ElementGetWeather",
      "output": "ElementGetWeatherResponse"
    },
    "GetCitiesByCountry": {
      "soapAction": "http://www.webserviceX.NET/GetCitiesByCountry",
      "input": "ElementGetCitiesByCountry",
      "output": "ElementGetCitiesByCountryResponse"
    }
  }
}