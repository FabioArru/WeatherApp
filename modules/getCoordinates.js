import {HereMapKey} from "../main.js"
import {UiSearchInput} from "../main.js"
import {fetchWeatherData} from "./fetchWeather.js"

export async function getCoordinates(e){


    if(e.target.classList.contains('cities-item')){

    const autocompleteContainer = document.getElementById('places');
    let place = e.target.textContent;
    
    const res =  await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${place}&apiKey=${HereMapKey}`);
    let data = await res.json();
    const location = new Object;
    
    
    location.lat = data.items[0].position.lat;
    location.lng = data.items[0].position.lng;
    location.place = data.items[0].title;

    UiSearchInput.value = "";
    autocompleteContainer.innerHTML = "";
    
    

    fetchWeatherData(location);
        

    }else{
        return;
    }
    
}