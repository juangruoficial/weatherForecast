import Infosection1 from "./Infosection1";
import Infosection2 from "./Infosection2";

const InfoSection = ({ weather, temp, tempUnit, isDark }) => {
  const hpaToMmHg = (hpa) => (hpa * 0.750062).toFixed(1);
  return (
    <section className="weather_info">
      <Infosection1
        weather={weather}
        temp={temp}
        tempUnit={tempUnit}
        isDark={isDark}
      />

      <section className={`section_2 ${isDark ? "dark_section" : ""}`}>
        <Infosection2
          weather={weather}
          meassure={"wind"}
          value={weather?.wind.speed}
          notation={"m/s"}
          isDark={isDark}
        />

        <div className="separator" />
        <Infosection2
          weather={weather}
          meassure={"humidity"}
          value={weather?.main.humidity}
          notation={"%"}
          isDark={isDark}
        />

        <div className="separator" />

        <Infosection2
          weather={weather}
          meassure={"pressure"}
          value={hpaToMmHg(weather?.main.pressure)}
          notation={"MmHg"}
          isDark={isDark}
        />
      </section>
    </section>
  );
};
export default InfoSection;
