import InfoSection from "./InfoSection";
import { useTemperature } from "../utilities/HooksWeather.js";

const Weather = ({ weather, isDark }) => {
  const kelvinToCelsius = (kelvin) => parseInt(kelvin - 273.15);
  const { temp, tempUnit, toggleTemperatureUnit } = useTemperature(
    weather?.main.temp !== undefined
      ? kelvinToCelsius(weather.main?.temp)
      : null,
    weather
  );

  return (
    <>
      <h1 className={`city ${isDark ? "dark_text" : ""}`}>
        {weather?.name} , {weather?.sys.country}
      </h1>

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
        Change to {tempUnit === "C" ? "F°" : "C°"}
      </button>
    </>
  );
};

export default Weather;
