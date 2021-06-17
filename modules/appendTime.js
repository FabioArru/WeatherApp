export function appendTime(parent,time, picture){
    parent.innerHTML = "";

    picture.style = "display: block";
    parent.classList = "time-container";

    parent.innerHTML = `<p class="sun-time">${time}</p>`;

    


}