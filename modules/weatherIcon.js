  export function weatherIcon(parent, weather){

    

    const icon = document.createElement('img');
    icon.id = "weather-icon";

        switch(weather){
            case "Thunderstorm":
                icon.src = "./img/temporale.png"
                
                break;
            case "Drizzle":
                
                icon.src = "./img/pioggerella.png"
                break;
            case "Rain":
                
                icon.src = "./img/pioggia.png"
                break;
            case "Snow":
                
                icon.src = "./img/neve.png"
                break;
            case "Mist":
                
                 icon.src = "./img/nebbia.png"
                break;
            case "Clouds":
                
                icon.src = "./img/nuvoloso.png"
                break;
            case "Clear":
                
                icon.src = "./img/sereno.png"
                break;

        }

    parent.appendChild(icon);

  } 