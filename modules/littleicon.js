export function littleIcon(weather) {

    let src = "";
    switch (weather) {
      case "Thunderstorm":
        src = "./img/temporale.png";
        break;
  
      case "Drizzle":
  
        src = "./img/pioggerella.png";
        break;
  
      case "Rain":
  
        src = "./img/pioggia.png";
        break;
  
      case "Snow":
  
        src = "../img/neve.png";
        break;
  
      case "Mist":
  
        src = "./img/nebbia.png";
        break;
  
      case "Clouds":
          
        src = "./img/nuvoloso.png";
        break;
  
      case "Clear":
        src = "./img/sereno.png";
        break;
    }

    return src;
  }
  