
import React, { useState, useEffect } from 'react';

const ImgSvg = ({dataApi, curHour}) => {

  const [icon, setIcon] = useState('');

  useEffect(() => {
    setIcon(dataApi.current.weather[0].icon);
  }, [dataApi]);

  const importIcon = async (folder, file) => {
    try {
      const module = await import(`./assets/${folder}/${file}.svg`);
      return module.default;
    } catch (err) {
      console.error(`Failed to load SVG icon ${file} located in the ${folder} folder : ${err}`);
    }
  };

  const getIconSrc = async () => {
    const isDaytime = curHour >= 6 && curHour < 18;
    const importedIcon = isDaytime ? await importIcon('day', icon) : await importIcon('night', icon);;

    if (!importedIcon) {
      return null;
    }


  console.log(`Successfully imported ${icon}.svg`);

    return importedIcon;
  };

  return (
    <>
      <div className="bloc-logo">
        {icon && (
          <img src={getIconSrc()} className="logo-meteo" alt="logo of the weather" />
        )}
      </div>
    </>
  )
}

export default ImgSvg;