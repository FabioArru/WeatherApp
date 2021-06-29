export function weatherIcon(element, weather) {
  switch (weather) {
    case "Thunderstorm":
      element.src = "./img/temporale.png";
      break;

    case "Drizzle":

      element.src = "./img/pioggerella.png";
      break;

    case "Rain":

      element.src = "./img/pioggia.png";
      break;

    case "Snow":

      element.src = "./img/neve.png";
      break;

    case "Mist":

      element.src = "./img/nebbia.png";
      break;

    case "Clouds":
        
      element.src = "./img/nuvoloso.png";
      break;

    case "Clear":
      element.src = "./img/sereno.png";
      break;
  }
}
