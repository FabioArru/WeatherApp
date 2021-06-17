/* import {UiSearchInput} from '../main.js';




let counter = -1;
 export function citySelector(inp){
    let possibleCities = document.querySelectorAll('.cities-item');
    console.log(possibleCities);
    let citiesArray = [...possibleCities];
    console.log(inp);
 

    if(possibleCities.length){
        let length = possibleCities.length;


        if (inp.keyCode == 40) {
            if(counter < length){
                counter++;
            possibleCities[counter].style = "background : red";
            }

        } else if(inp.keyCode == 38) {
            
           if(counter < 0){
            counter--;
            possibleCities[counter].style = "background : red";
           }

        }else{
            return;
        }



    }else{
        return;
    }

} */