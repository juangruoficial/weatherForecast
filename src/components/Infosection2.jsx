const Infosection2 = ({ meassure, value, notation, isDark }) => {
  return (
    <article className="info_section_2">
      <img
        className={`icons ${meassure}_icon`}
        alt={meassure}
        src={`/images/${meassure}.png`}
      />
      <span
        className={`text_value ${meassure}_value ${isDark ? "dark_text" : ""}`}
      >
        {value} <br />
        {notation}
      </span>
    </article>
  );
};
export default Infosection2;
