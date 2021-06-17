import {displayCurrentWeather} from "./dailyWeather.js"


export async function fetchWeatherData(city){
    
    const place = city;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${place.lat}&lon=${place.lng}&exclude=minutly&appid=a6d647ab61d742a4178f4ce69a5ebdb4`);
    let data = await res.json();

    console.log(place); 


    const currentWeather = data.current;
    console.log(data);

    console.log(new Date(data.current.dt * 1000 + data.timezone_offset * 1000 - 7200 * 1000));
    place.timezone_offset = data.timezone_offset;

    displayCurrentWeather(currentWeather, place);

    

    return data;
}