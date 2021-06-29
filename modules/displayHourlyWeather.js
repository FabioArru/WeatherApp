import { hourlyWeather } from "../main.js";
import { littleIcon } from "./littleicon.js";

export function displayHourlyWeather(weather, city){
    
    hourlyWeather.innerHTML = "";
    const heading = document.createElement('h2');
    heading.innerText = 'Hourly weather of ' + city.place;

    hourlyWeather.appendChild(heading);
    let timezone = city.timezone;

    
    
    weather.forEach(element => {

      let weatherContaiener = document.createElement('div');
      weatherContaiener.classList = 'hourly-weather-box';


        
      let dt = element.dt * 1000;

      let date = new Date(dt);
      
 
      let localDate = date.toLocaleString('en-US', {timeZone : timezone, weekday: 'short', year : 'numeric', month : 'short', day : 'numeric', hour : '2-digit', hourCycle : 'h24', minute : '2-digit'});

      const Weather = element.weather[0].main + " - " +  element.weather[0].description;

      let temp = Math.floor(element.temp - 273.15) + '°';
      
      weatherContaiener.innerHTML = `
        <div class = "hourly-weather-date"><h3>${localDate}</h3></div>
        <div class = "hourly-weather-description"><img class="little-weather-icon" src=${littleIcon(element.weather[0].main)} ></img><h3>${Weather}</h3></div>
        <div class = "hourly-weather-temp"><h3><i class="fas fa-temperature-low">   </i>${temp}</h3></div>
      `  
      

    hourlyWeather.appendChild(weatherContaiener);
       

       
    });

    

}