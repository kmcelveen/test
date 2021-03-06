let axios = require('axios');
const apiKey = require('../../configs').openWeatherMapConfigApiKey
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid='+apiKey+'&units=imperial';

module.exports = {  getTemp: function (location) {    var encodedLocation = encodeURIComponent(location);    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;    return axios.get(requestUrl).then(function (res) {      if (res.data.cod && res.data.message) {        throw new Error(res.data.message);      } else {
        console.log(res.data);
        return {
          temp: res.data.main.temp,
          location: res.data.name
        }
      }    }, function (res) {      throw new Error(res.data.message);    });  }}