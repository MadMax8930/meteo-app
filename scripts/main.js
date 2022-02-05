// API: openweathermap.org

const API_KEY = 'e4d50bc9123c2306a553377e8fe05b98';
let resultsAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');

const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        callAPI(long, lat);
    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer!`)
    })
}

// Doc: https://openweathermap.org/api/one-call-api
// exlusion des minutes, avec unité metrique et langue francaise

function callAPI(long, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);    
        resultsAPI = data;

        temps.innerText = resultsAPI.current.weather[0].description;
        temperature.innerText = `${Math.trunc(resultsAPI.current.temp)}°`;
        localisation.innerText = resultsAPI.timezone;

        // Les Heures, par tranches de trois:

        let heureActuelle = new Date().getHours();

        for(let i = 0; i < heure.length; i++) {

            let heureIncr = heureActuelle + i * 3; 

            if(heureIncr>24) {
                heure[i].innerText = `${heureIncr - 24} h`;
            } else if (heureIncr === 24) {
                heure[i].innerText = "00 h";
            } else { 
                heure[i].innerText = `${heureIncr} h`;
            }
        }

        // Les Temperatures, par tranches de trois:

        for(let j = 0; j < tempPourH.length; j++) {

            tempPourH[j].innerText = 
            `${Math.trunc(resultsAPI.hourly[j * 3].temp)}°`;
        }
    })
}