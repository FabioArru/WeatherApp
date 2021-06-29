import {menuLink} from '../main.js';
import {weatherDisplay} from '../main.js';


let linkValue = "Current";


export function changeDisplayedWeather(e){
    let links = [...menuLink];

    let target = e.target;

    linkValue = target.textContent;


    for(let i = 0; i < links.length; i++){
    
         if(weatherDisplay[i].id === linkValue.toLowerCase()){
            weatherDisplay[i].style = "display : flex";
        }else{
            weatherDisplay[i].style = 'display: none';
        }
    } 

 
    
}