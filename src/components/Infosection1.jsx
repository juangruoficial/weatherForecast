export const Infosection1 = ({ weather, temp, tempUnit }) => {
  return (
    <section className="section_1">
      <h4 className="weather_description">{weather?.weather[0].description}</h4>
      <article className="info_weather">
        <span className="temp_value">
          {temp} {tempUnit === "C" ? "C°" : "F°"}
        </span>
        <img
          className="weather_img"
          alt="weather_img"
          src={
            weather?.weather[0].icon &&
            `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
          }
        />
      </article>
    </section>
  );
};

export default Infosection1;
