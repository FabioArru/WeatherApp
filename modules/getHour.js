export function getHour(time, offset){

    const timeConst = 7200 * 1000;
    
    const REALTIME = new Date(time + offset - timeConst);
  

    let dateHour = REALTIME.getHours();


    let dateMinutes = REALTIME.getMinutes();

    if(dateHour < 10){
        dateHour = "0" + dateHour;
    }

    if(dateMinutes < 10){
        dateMinutes = "0" + dateMinutes;
    }

    let realTime = `${dateHour}:${dateMinutes}`;
    
    return realTime;

}