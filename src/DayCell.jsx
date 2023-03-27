import newDayOrderArr from "./time.js";

const DayCell = ({dataApi}) => {
  
  const dayTempArr = [];

  // First three letters of days and temperatures for each day:

    for(let i = 0; i < 7; i++) {
        const dayName = newDayOrderArr[i].slice(0,3);
        const temperature = Math.trunc(dataApi.daily[i + 1].temp.day)
        dayTempArr.push(
             <div className="bloc-j" key={i}>
                <p className="jour-prevision-nom">{dayName}</p>
                <p className="jour-prevision-temp">{`${temperature}°`}</p>
            </div>
        );
    }

    return <div className="jour-prevision-bloc">{dayTempArr}</div>
    
};

export default DayCell;