import { useEffect, useState } from "react";
import InfoSection from "./InfoSection";

const Weather = ({ weather, isDark }) => {
  //========================States==========================//
  const [tempUnit, setTempUnit] = useState("C");
  const [temp, setTemp] = useState(null);

  //========================functions==========================//
  const kelvinToCelsius = (kelvin) => parseInt(kelvin - 273.15);
  const kelvinToFahrenheit = (kelvin) =>
    parseInt(((kelvin - 273.15) * 9) / 5 + 32);

  const toggleTemperatureUnit = () => {
    if (tempUnit === "C") {
      setTemp(kelvinToFahrenheit(weather?.main.temp));
      setTempUnit("F");
    } else {
      setTemp(kelvinToCelsius(weather?.main.temp));
      setTempUnit("C");
    }
  };

  useEffect(() => {
    if (weather?.main.temp !== undefined) {
      setTemp(kelvinToCelsius(weather.main.temp));
    }
  }, [weather]);

  return (
    <>
      <div className="circle_wrapper">
        <div className="circle" />
      </div>

      <h1 className={`city ${isDark ? "dark_text" : ""}`}>{weather?.name}</h1>

      <InfoSection
        weather={weather}
        temp={temp}
        tempUnit={tempUnit}
        isDark={isDark}
      />

      <button
        onClick={toggleTemperatureUnit}
        className={`change_meassure  ${isDark ? "dark_section" : ""} ${
          isDark ? "dark_text" : ""
        }`}
      >
        Cambiar a {tempUnit === "C" ? "F°" : "C°"}
      </button>
    </>
  );
};
export default Weather;
