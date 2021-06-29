import {displayCurrentWeather} from "./displayCurrentWeather.js";
import {displayWeeklyWeather} from "./displayWeeklyWeather.js";
import {displayHourlyWeather} from "./displayHourlyWeather.js"

export async function fetchWeatherData(city){
    
    const place = city;
    

    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${place.lat}&lon=${place.lng}&exclude=minutly&appid=a6d647ab61d742a4178f4ce69a5ebdb4`);
    let data = await res.json();

    place.timezone_offset = data.timezone_offset;
    place.timezone = data.timezone;
        
  
    
    const currentWeather = data.current;
    const weeklyWeather = data.daily;
    const hourlyWeather = data.hourly;
    
    displayWeeklyWeather(weeklyWeather, place);

    displayHourlyWeather(hourlyWeather, place);

    displayCurrentWeather(currentWeather, place);


    return data;
}