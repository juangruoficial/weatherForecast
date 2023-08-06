import Infosection1 from "./Infosection1";
import Infosection2 from "./Infosection2";

const InfoSection = ({ weather, temp, tempUnit }) => {
  const hpaToMmHg = (hpa) => (hpa * 0.750062).toFixed(1);
  return (
    <section className="weather_info">
      <Infosection1 weather={weather} temp={temp} tempUnit={tempUnit} />

      <section className="section_2">
        <Infosection2
          weather={weather}
          meassure={"wind"}
          value={weather?.wind.speed}
          notation={"m/s"}
        />

        <div className="separator" />
        <Infosection2
          weather={weather}
          meassure={"humidity"}
          value={weather?.main.humidity}
          notation={"%"}
        />

        <div className="separator" />

        <Infosection2
          weather={weather}
          meassure={"pressure"}
          value={hpaToMmHg(weather?.main.pressure)}
          notation={"MmHg"}
        />
      </section>
    </section>
  );
};
export default InfoSection;
