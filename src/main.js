import newDayOrderArr from "./time.js";

const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const jour = document.querySelectorAll('.jour-prevision-nom');
const tempPourJ = document.querySelectorAll('.jour-prevision-temp');


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

        // Les trois premieres lettres des jours du array tabJour:

        for(let k = 0; k < newDayOrderArr.length; k++) {
            jour[k].innerText = newDayOrderArr[k].slice(0,3);
        }

        // Les temperatures par jour(a 3 lettres):

        for(let m = 0; m < tempPourJ.length; m++) {
            tempPourJ[m].innerText =
            `${Math.trunc(resultsAPI.daily[m + 1].temp.day)}°`; 
        }

