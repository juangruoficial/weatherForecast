import { useEffect, useState } from "react";
import "./App.css";
import "./components/styles/SearchForm.css";
import "./components/styles/Preloader.css";
import axios from "axios";
import Weather from "./components/Weather";
import SearchForm from "./components/SearchForm";
import { backgroundAccordingToWeather } from "./utilities/utilities.js";

function App() {
  //============================ImagewetaherState===================//
  const [background, setbackground] = useState(null);
  //============================WeatherStates===================//
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);
  const [daysWeatherInfo, setDaysWeatherInfo] = useState(null);

  const API_KEY = "72b39761e7f01caa4c4d9a7ce3aa447f";

  const succes = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const URL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}`;

    Promise.all([axios.get(URL), axios.get(URL2)])
      .then((responses) => {
        setWeatherInfo(responses[0].data);
        setDaysWeatherInfo(responses[1].data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCitySearch = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    axios
      .get(URL)
      .then(({ data }) => {
        setCityWeather(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  //=====================================backgroundEffect=================//
  useEffect(() => {
    cityWeather
      ? setbackground(
          backgroundAccordingToWeather[cityWeather?.weather[0].icon]
        )
      : setbackground(
          backgroundAccordingToWeather[weatherInfo?.weather[0].icon]
        );
  }, [weatherInfo, cityWeather]);

  return (
    <>
      <main className={`background ${background}`}>
        <section className="main_section">
          <h1 className="title_main_section">Weather ForeCast</h1>
          <SearchForm onSearch={handleCitySearch} />
          {cityWeather ? (
            <Weather weather={cityWeather} />
          ) : (
            <Weather weather={weatherInfo} daysWeatherInfo={daysWeatherInfo} />
          )}

          <footer className="footer">Created by Juan David Cruz</footer>
        </section>
      </main>
    </>
  );
}

export default App;
