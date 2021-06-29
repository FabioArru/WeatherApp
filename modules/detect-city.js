import {getCoordinates} from './getCoordinates.js';


export function detectCity(e){

    if(e.target.classList.contains('cities-item')){
     
        let place = e.target.textContent;
    
        getCoordinates(place);   
    
        }else{
            return;
        }




    
}