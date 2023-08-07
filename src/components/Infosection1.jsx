export const Infosection1 = ({ weather, temp, tempUnit, isDark }) => {
  const description = weather?.weather[0].description;
  const capitalizeFirstLetter = (string) => {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <section className={`section_1  ${isDark ? "dark_section" : ""}`}>
      <h4 className={`weather_description ${isDark ? "dark_text" : ""}`}>
        {capitalizeFirstLetter(description)}
      </h4>
      <article className="info_weather">
        <span className={`temp_value ${isDark ? "dark_text" : ""}`}>
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
