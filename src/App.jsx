import './style.css';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import ImgSvg from './ImgSvg';
import DayCell from './DayCell';
import HourCell from './HourCell';

const App = () => {
  
  const [locationObject, setLocationObject] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const currentHour = new Date().getHours();
    
  const apiKey = process.env.REACT_APP_API_KEY
  
  const callAPI = (long, lat) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${apiKey}`)
    .then(resp => resp.json())
    .then(data => { 
      setLocationObject(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
    });
  }
  console.log("My coordinates: ", locationObject)
  console.log("Current Hour: ", currentHour)

  
    useEffect(() => {
        if(navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(position => {
              let long = position.coords.longitude;
              let lat = position.coords.latitude;
              callAPI(long, lat);
          }, () => { alert(`Your browser geolocation is turned off. Turned it on to access the weather application!`)})
        } 
    }, [])

    if (isLoading) {
      return <Loader isloaded={!isLoading} />
    }

  return (
    <div className="container">
      <h1>Max's meteo application</h1>
      <div className="bloc-logo-info">
         <ImgSvg dataApi={locationObject} curHour={currentHour} />
         <div className="bloc-info">
            <p className="temps">{locationObject.current.weather[0].description}</p>
            <p className="temperature">{Math.trunc(locationObject.current.temp)}°</p>
            <p className="localisation">{locationObject.timezone}</p>
         </div>
      </div>
      <HourCell dataApi={locationObject} curHour={currentHour} />
      <DayCell dataApi={locationObject} /> 
    </div>
  )
}

export default App