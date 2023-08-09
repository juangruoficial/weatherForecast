import "./App.css";
import "../public/styles/dark.css";
import { useState } from "react";
import { Sugar } from "react-preloaders";
import ModalWrongCity from "./components/ModalWrongCity";
import Weather from "./components/Weather";
import SearchForm from "./components/SearchForm";
import DarkModeButton from "./components/DarkModeButton";
import useWeatherData from "./Hooks/useWeatherData.js";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(true);
  const mainTitle = "Weather Forecast";

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
          <Header isDark={isDark} mainTitle={mainTitle} />
          <SearchForm onSearch={handleCitySearch} isDark={isDark} />
          <Weather weather={cityWeather || weatherInfo} isDark={isDark} />
        </section>
      </main>
      <Sugar customLoading={loading} />
    </>
  );
}

export default App;
