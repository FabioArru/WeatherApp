import {possiblePlaces} from "./modules/possiblePlaces.js";
import {getCoordinates} from "./modules/getCoordinates.js";
/* import {citySelector} from './modules/keyboard-selector.js' */

export const HereMapKey = 'TqYDOp7ZwP5nKlXLaC27XGPQQkRtPTLaEWdksWPciS0';
export const UiSearchInput = document.getElementById('search-input');
export const weatherDisplay = document.getElementById('display-weather');
export const currentWeatherInfo = document.querySelector('#current-weather-info');
export const currentWeatherIcon = document.getElementById('current-weather-icon');
export const currentWeatherDescription = document.getElementById('current-weather-description');
export const sunsetContainer = document.getElementById('sunset-time');
export const sunriseContainer = document.getElementById('sunrise-time');
export const sunrisePicture = document.getElementById('sunrise-icon');
export const sunsetPicture = document.getElementById('sunset-icon');



UiSearchInput.addEventListener('keyup', autoComplete);



function autoComplete(){

    possiblePlaces(UiSearchInput.value);
}

document.addEventListener('click', getCoordinates);















