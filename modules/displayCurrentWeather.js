import {currentWeatherDisplay} from '../main.js';
import {currentWeatherInfo} from '../main.js';
import {currentWeatherIcon} from '../main.js';
import {currentWeatherDescription} from '../main.js';
import {sunriseContainer} from '../main.js';
import {sunsetContainer} from '../main.js';
import {sunrisePicture} from '../main.js';
import {sunsetPicture} from '../main.js';
import {weatherImage} from '../main.js';
import {weatherIcon} from './weatherIcon.js'; 
import {getHour} from './getHour.js';
import {appendTime} from './appendTime.js';


export function displayCurrentWeather(weather, city){

     

    const WEATHER = {
        time : weather.dt * 1000,
        location : city.place,
        mainWeather : weather.weather[0].main,
        weatherDescription : weather.weather[0].description,
        temp : Math.floor(weather.temp - 273.15) + "°",
        feelsTemp : Math.floor(weather.feels_like -273.15) + "°", 
        pressure : weather.pressure,
        humidity : weather.humidity,
        windSpeed : weather.wind_speed,
        windDeg : weather.wind_deg,
        uvi : weather.uvi,
        sunrise : weather.sunrise * 1000,
        sunset : weather.sunset * 1000,
        deltaTime : weather.dt,
        timezone_offset : city.timezone_offset * 1000
    };
    
    currentWeatherInfo.innerHTML = `

    <div class = "weather-info">

        <h3><i class="fas fa-temperature-low"></i> Temperature</h3>
        <h3 class="weather-data">${WEATHER.temp}</h3>
    
    </div>
    <div class = "weather-info">
        <h3><i class="fas fa-temperature-low"></i> Feels like</h3>
        <h3 class="weather-data">${WEATHER.feelsTemp}</h3>
    
    </div>
    <div class = "weather-info">
        <h3><i class="fas fa-tint"></i> Humidity</h3>
        <h3 class="weather-data">${WEATHER.humidity} %</h3>
    
    </div>
    <div class = "weather-info">
        <h3><i class="fas fa-angle-double-down"></i> Pressure</h3>
        <h3 class="weather-data">${WEATHER.pressure} mb</h3>
    
    </div>
    <div class = "weather-info">
        <h3><i class="fas fa-wind"></i> Wind</h3>
        <h3 class="weather-data"><i class="fas fa-location-arrow" style="transform: rotate(${WEATHER.windDeg}deg)"></i> ${WEATHER.windSpeed}km\\h</h3>
    
    </div>
    <div class = "weather-info">
        <h3><i class="fas fa-atom"></i> UV index</h3>
        <h3 class="weather-data">${WEATHER.uvi}</h3>
    
    </div>
    
    
    
    `
    
    currentWeatherDescription.innerHTML = "";
    
    document.querySelector('#weather-location').textContent = WEATHER.location + " " + getHour(WEATHER.time, WEATHER.timezone_offset);
    
    appendTime(sunriseContainer, getHour(WEATHER.sunrise, WEATHER.timezone_offset), sunrisePicture);
    
    appendTime(sunsetContainer, getHour(WEATHER.sunset, WEATHER.timezone_offset), sunsetPicture); 
    
    currentWeatherDescription.innerHTML = `<h3 id="weather-desc">${WEATHER.mainWeather}-${WEATHER.weatherDescription}<h3>`
    
    weatherIcon(weatherImage, WEATHER.mainWeather);


}
