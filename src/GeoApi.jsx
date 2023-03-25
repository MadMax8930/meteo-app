import { useState, useEffect } from 'react';

const GeoApi = () => {

  const [resApi, setResApi] = useState([])

    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
      const callAPI = (long, lat) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${apiKey}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
      }
    
    }, [])


  return (
    <>
      <h1>Meteo application</h1>
      <div className="bloc-logo-info">
         <div className="bloc-logo">
            <img src="" className="logo-meteo" 
            alt="logo du temps qu'il fait" />
         </div>
         <div className="bloc-info">
            <p className="temps"></p>
            <p className="temperature"></p>
            <p className="localisation"></p>
         </div>
      </div> 
    </>
  )
}

export default GeoApi;