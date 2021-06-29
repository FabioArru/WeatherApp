import {dailyWeather} from '../main.js';
import {littleIcon} from './littleicon.js'


export function displayWeeklyWeather(weather, city){
    dailyWeather.innerHTML = "";


    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    
    const heading = document.createElement('h2');
    heading.innerText = 'Weekly weather of ' + city.place;

    dailyWeather.appendChild(heading);


     weather.forEach(element => {

       
        
       

       let date = new Date(element.dt * 1000);
       let month = months[date.getMonth()];
       let numericDay = date.getDate();
       let nameDay = weekDays[date.getDay()];
        
       let formattedDay = nameDay + " " + numericDay + " " + month;
       


       const weatherDates = {
           weather_main : element.weather[0].main,
           weather_description :  element.weather[0].description,
           temp_day : element.temp.day,
           temp_night : element.temp.night,
           temp_max : Math.floor(element.temp.max - 273.15) + "°",
           temp_min : Math.floor(element.temp.min - 273.15) + "°"

       }


       let dailyContainer = document.createElement('div');
       dailyContainer.classList = "daily-box";


       dailyContainer.innerHTML = `

            <div class="weather-day"><h3>${formattedDay}</h3></div>
            <div class = "weather-description"><img class="little-weather-icon" src=${littleIcon(weatherDates.weather_main)} ></img><h3 id="dailyWeather-icon">${weatherDates.weather_main} - ${weatherDates.weather_description}</h3></div>
            <div class="weather-temp"><i class="fas fa-temperature-low"></i><h3>${weatherDates.temp_min}/${weatherDates.temp_max}</h3></div>


       
       `
       

       dailyWeather.appendChild(dailyContainer);
       
      



       
    });
}