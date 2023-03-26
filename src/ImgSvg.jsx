import React, { useState, useEffect } from 'react';
import i04n from "./assets/night/i04n.svg" 

const ImgSvg = ({dataApi, curHour}) => {

  const [icon, setIcon] = useState('');

  useEffect(() => {
    setIcon(dataApi.current.weather[0].icon);
  }, [dataApi]);

  const getIconPath = async (iconName) => {
    if (curHour >= 6 && curHour < 18) {
      const path = await import(`./assets/day/${iconName}.svg`);
      return path.default;
    } else {
      const path = await import(`./assets/night/${iconName}.svg`);
      return path.default;
    }
  }

  return (
    <>
      <div className="bloc-logo">
        {console.log("icon", icon)}
        {icon && (
            <img src={getIconPath(icon) || i04n} className="logo-meteo" alt="logo of the weather" />
        )}
      </div>
    </>
  )
}

export default ImgSvg;