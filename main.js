import {possiblePlaces} from "./modules/possiblePlaces.js";
import {getCoordinates} from "./modules/getCoordinates.js";
import { detectCity } from "./modules/detect-city.js";
import {changeDisplayedWeather} from './modules/changeDisplayedWeather.js'


/* import {citySelector} from './modules/keyboard-selector.js' */

export const HereMapKey = 'TqYDOp7ZwP5nKlXLaC27XGPQQkRtPTLaEWdksWPciS0';
export const UiSearchInput = document.getElementById('search-input');
export const currentWeatherDisplay = document.getElementById('current');
export const currentWeatherInfo = document.querySelector('#current-weather-info');
export const currentWeatherIcon = document.getElementById('current-weather-icon');
export const currentWeatherDescription = document.getElementById('current-weather-description');
export const sunsetContainer = document.getElementById('sunset-time');
export const sunriseContainer = document.getElementById('sunrise-time');
export const sunrisePicture = document.getElementById('sunrise-icon');
export const sunsetPicture = document.getElementById('sunset-icon');
export const menuLink = document.querySelectorAll('.menu-link');
export const menu = document.getElementById('menu');
export const weatherDisplay = document.getElementsByClassName('display-weather');
export const dailyWeather = document.getElementById('weekly');
export const hourlyWeather = document.getElementById('hourly');
export const dailyWeatherHeading = document.getElementById('daily-weather-heading');
export const weatherImage = document.getElementById('weather-icon');





UiSearchInput.addEventListener('keyup', autoComplete);



function autoComplete(){

    possiblePlaces(UiSearchInput.value);
}

document.addEventListener('click', detectCity);

document.addEventListener('load', getCoordinates('Roma'));



menu.addEventListener('click', changeDisplayedWeather);















