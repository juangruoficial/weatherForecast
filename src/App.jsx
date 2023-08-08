import "./App.css";
import "./components/styles/SearchForm.css";
import "./components/styles/Preloader.css";
import "../public/styles/dark.css";
import "./components/styles/SearchForm.css";
import { useState } from "react";
import { Sugar } from "react-preloaders";
import ModalWrongCity from "./components/ModalWrongCity";
import Weather from "./components/Weather";
import SearchForm from "./components/SearchForm";
import DarkModeButton from "./components/DarkModeButton";
import useWeatherData from "./utilities/HooksApp.js";

function App() {
  const [isDark, setIsDark] = useState(true);

  const {
    loading,
    weatherInfo,
    cityWeather,
    correctCityName,
    background,
    handleCitySearch,
    setCorrectCityName,
  } = useWeatherData();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const closeModal = () => {
    setCorrectCityName(false);
  };

  return (
    <>
      <ModalWrongCity correctCityName={correctCityName} toClose={closeModal} />
      <main className={`background ${background}`}>
        <section className="main_section">
          <DarkModeButton isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <h1 className={`title_main_section ${isDark ? "dark_text" : ""}`}>
            Weather Forecast
          </h1>
          <SearchForm onSearch={handleCitySearch} isDark={isDark} />
          <Weather weather={cityWeather || weatherInfo} isDark={isDark} />
        </section>
      </main>
      <Sugar customLoading={loading} />
    </>
  );
}

export default App;
