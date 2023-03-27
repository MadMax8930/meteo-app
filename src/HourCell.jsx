const HourCell = ({dataApi, curHour}) => {

   const hour = document.querySelectorAll('.heure-nom-prevision');
   const tempForHour = document.querySelectorAll('.heure-prevision-valeur');

    // Hours, by three:

    for(let i = 0; i < hour.length; i++) {

        let hourIncr = curHour + i * 3; 

        if(hourIncr>24) {
            hour[i].innerText = `${hourIncr - 24} h`;
        } else if (hourIncr === 24) {
            hour[i].innerText = "00 h";
        } else { 
            hour[i].innerText = `${hourIncr} h`;
        }
    }

    // Temperatures, by three:

    for(let j = 0; j < tempForHour.length; j++) {

        tempForHour[j].innerText = 
        `${Math.trunc(dataApi.hourly[j * 3].temp)}°`;
    }

  return (
    <div className="heure-prevision-bloc">

        <div className="bloc-h">
            <p className="heure-nom-prevision"></p>
            <p className="heure-prevision-valeur"></p>
        </div>
        <div className="bloc-h">
            <p className="heure-nom-prevision"></p>
            <p className="heure-prevision-valeur"></p>
        </div>
        <div className="bloc-h">
            <p className="heure-nom-prevision"></p>
            <p className="heure-prevision-valeur"></p>
        </div>
        <div className="bloc-h">
            <p className="heure-nom-prevision"></p>
            <p className="heure-prevision-valeur"></p>
        </div>
        <div className="bloc-h">
            <p className="heure-nom-prevision"></p>
            <p className="heure-prevision-valeur"></p>
        </div>
        <div className="bloc-h">
            <p className="heure-nom-prevision"></p>
            <p className="heure-prevision-valeur"></p>
        </div>
        <div className="bloc-h">
            <p className="heure-nom-prevision"></p>
            <p className="heure-prevision-valeur"></p>
        </div>

   </div> 
  )
}

export default HourCell;