import {HereMapKey} from "../main.js"

const UiautocompleteContainer = document.getElementById('places');

export async function possiblePlaces(place){

    const res =  await fetch(`https://geocode.search.hereapi.com/v1/autocomplete?q=${place}&apiKey=${HereMapKey}`,{
        'method' : 'GET',
        
    });
    const data = await res.json();

    const results = data.items;
    UiautocompleteContainer.innerHTML = "";
    if(data.items.length > 0){

        
    
        results.forEach(city =>{
        
        let cityItem = document.createElement('li');
        cityItem.classList = "cities-item";
        cityItem.textContent = city.title;

        UiautocompleteContainer.appendChild(cityItem);
        

    })

    }else{
        return;
    }

    




}