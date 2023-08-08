import { useState, useEffect } from "react";

export const useTemperature = (initialTemperature, weather) => {
  const [tempUnit, setTempUnit] = useState("C");
  const [temp, setTemp] = useState(initialTemperature);

  const kelvinToCelsius = (kelvin) => parseInt(kelvin - 273.15);
  const kelvinToFahrenheit = (kelvin) =>
    parseInt(((kelvin - 273.15) * 9) / 5 + 32);

  const toggleTemperatureUnit = () => {
    const newTempUnit = tempUnit === "C" ? "F" : "C";
    const newTemp =
      newTempUnit === "F"
        ? kelvinToFahrenheit(weather?.main.temp)
        : kelvinToCelsius(weather?.main.temp);

    setTemp(newTemp);
    setTempUnit(newTempUnit);
  };

  useEffect(() => {
    if (weather?.main.temp !== undefined) {
      setTemp(kelvinToCelsius(weather.main.temp));
    }
  }, [weather]);

  return { temp, tempUnit, toggleTemperatureUnit };
};
