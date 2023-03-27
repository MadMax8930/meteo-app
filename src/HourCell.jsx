const HourCell = ({dataApi, curHour}) => {

  const hourTempArr = []

  // Temperatures every three hours of the current day:

    for(let i = 0; i < 7; i++) {
        const hourIncr = curHour + i * 3; 
        const hourByThree = hourIncr > 24 ? `${hourIncr - 24} h` : hourIncr === 24 ? "00 h" : `${hourIncr} h`;
        const tempByThree = Math.trunc(dataApi.hourly[i * 3].temp)
        hourTempArr.push(
            <div className="bloc-h" key={i}>
                <p className="heure-nom-prevision">{hourByThree}</p>
                <p className="heure-prevision-valeur">{tempByThree}°</p>
            </div>
        );
    }
    return <div className="heure-prevision-bloc">{hourTempArr}</div>
}

export default HourCell;