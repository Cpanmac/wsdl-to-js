'use strict';

const GeoIPService = require("./Geo");
const WeatherService = require("./Weather");

let geoData = { IPAddress: "62.16.1.124" };
let weatherData = { CountryName: "Germany", CityName: "Berlin" };
let geoRequest = new GeoIPService.GeoIPServiceSoap.GetGeoIP(geoData);
let citiesRequest = new WeatherService.GlobalWeatherSoap.GetCitiesByCountry({ CountryName: "Germany"});

geoRequest.request(function (error, response){
  let geoResponse = response.extract();
  console.log('Country: ' + geoResponse.GetGeoIPResult.CountryName);
});

let weatherRequest = new WeatherService.GlobalWeatherSoap.GetWeather(weatherData);

weatherRequest.debug();
weatherRequest.request((error, response) => {
  if (error === null) {
    let weatherResponse = response.extract();
    console.log('Weather: ' + weatherResponse.GetWeatherResult);
  } else {
    console.log('Error: ' + error);
  }
});

citiesRequest.request((error, response) => {
  if (error === null) {
    let citiesResponse = response.extract();
    console.log('Cities: ' + citiesResponse.GetCitiesByCountryResult);
  } else {
    console.log('Error: ' + error);
  }
});
