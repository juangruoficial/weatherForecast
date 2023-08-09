//=========================AuxiliarFunctions ======================//

import { useEffect, useState } from "react";
import axios from "axios";
import { backgroundAccordingToWeather } from "../utilities/utilities.js";

function useWeatherData() {
  const [loading, setLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);
  const [correctCityName, setCorrectCityName] = useState(false);
  const [background, setBackground] = useState(null);

  const API_KEY = "72b39761e7f01caa4c4d9a7ce3aa447f";

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(URL)
      .then((res) => {
        setWeatherInfo(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleCitySearch = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    axios
      .get(URL)
      .then(({ data }) => {
        setCityWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setCorrectCityName(true);
        setLoading(false);
      });
  };

  const accessLocationDenied = (err) => {
    if (err.code) handleCitySearch("Bogota");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, accessLocationDenied);
  }, []);

  //=====================================backgroundEffect=================//
  useEffect(() => {
    cityWeather
      ? setBackground(
          backgroundAccordingToWeather[cityWeather?.weather[0].icon]
        )
      : setBackground(
          backgroundAccordingToWeather[weatherInfo?.weather[0].icon]
        );
  }, [weatherInfo, cityWeather]);

  return {
    loading,
    weatherInfo,
    cityWeather,
    correctCityName,
    background,
    handleCitySearch,
    accessLocationDenied,
    success,
    setBackground,
    setWeatherInfo,
    setCityWeather,
    setCorrectCityName,
  };
}

export default useWeatherData;
