import {default as i01d} from "./assets/day/i01d.svg";
import {default as i02d} from "./assets/day/i02d.svg";
import {default as i03d} from "./assets/day/i03d.svg";
import {default as i04d} from "./assets/day/i04d.svg";
import {default as i09d} from "./assets/day/i09d.svg";
import {default as i10d} from "./assets/day/i10d.svg";
import {default as i11d} from "./assets/day/i11d.svg";
import {default as i13d} from "./assets/day/i13d.svg";
import {default as i50d} from "./assets/day/i50d.svg";
// import './svg.css';
import {default as i01n} from "./assets/night/i01n.svg";
import {default as i02n} from "./assets/night/i02n.svg";
import {default as i03n} from "./assets/night/i03n.svg";
import {default as i04n} from "./assets/night/i04n.svg";
import {default as i09n} from "./assets/night/i09n.svg";
import {default as i10n} from "./assets/night/i10n.svg";
import {default as i11n} from "./assets/night/i11n.svg";
import {default as i13n} from "./assets/night/i13n.svg";
import {default as i50n} from "./assets/night/i50n.svg";

const ImgSvg = ({dataApi, curHour}) => {

  const iconCode = dataApi.current.weather[0].icon;

  // Determine which imported value to use based on the icon code and time of day
  let icon;

  if (curHour >= 6 && curHour < 18) {
    switch (iconCode) {
      case '01d':
        icon = i01d;
        break;
      case '02d':
        icon = i02d;
        break;
      case '03d':
        icon = i03d;
        break;
      case '04d':
        icon = i04d;
        break;
      case '09d':
        icon = i09d;
        break;
      case '10d':
        icon = i10d;
        break;
      case '11d':
        icon = i11d;
        break;
      case '13d':
        icon = i13d;
        break;
      case '50d':
        icon = i50d;
        break;
      default:
        icon = null;
        break;
    }
  } else {
    switch (iconCode) {
      case '01n':
        icon = i01n;
        break;
      case '02n':
        icon = i02n;
        break;
      case '03n':
        icon = i03n;
        break;
      case '04n':
        icon = i04n;
        break;
      case '09n':
        icon = i09n;
        break;
      case '10n':
        icon = i10n;
        break;
      case '11n':
        icon = i11n;
        break;
      case '13n':
        icon = i13n;
        break;
      case '50n':
        icon = i50n;
        break;
      default:
        icon = null;
        break;
    }
  }

  return (
    <div className="bloc-logo">
      <img src={icon} className="logo-meteo" alt="logo of the weather" />
    </div>
  );
};

export default ImgSvg;