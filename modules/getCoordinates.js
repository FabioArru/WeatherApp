import {HereMapKey} from "../main.js"
import {UiSearchInput} from "../main.js";
import {fetchWeatherData} from "./fetchWeather.js"

export async function getCoordinates(input){


   

    const autocompleteContainer = document.getElementById('places');
    
    
    const res =  await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${input}&apiKey=${HereMapKey}`);
    let data = await res.json();
    const location = new Object;
    
    
    location.lat = data.items[0].position.lat;
    location.lng = data.items[0].position.lng;
    location.place = data.items[0].title;

    UiSearchInput.value = "";
    autocompleteContainer.innerHTML = "";
    
    

    fetchWeatherData(location);
        

    
    
}