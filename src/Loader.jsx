import { useState } from 'react';
import circles from "./assets/loading/circles.svg";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    // const geo = navigator.geolocation ? navigator.geolocation.getCurrentPosition(position => {
    //     // console.log(position);
    //     let long = position.coords.longitude;
    //     let lat = position.coords.latitude;
    //     // callAPI(long, lat);
    //     setLoading(false)
    
    // }) : (() => {
    //     alert(`You have refused the geo-localisation, turn it on so the application can work!`)
    //     setLoading(true)
    // })
    
  return (
    <div className={`overlay-loading ${!loading ? "" : "vanish"}`}>
        <img src={circles} alt="loading screen" />
    </div> 
  )
}


export default Loader;