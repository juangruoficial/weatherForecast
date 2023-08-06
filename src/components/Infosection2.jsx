const Infosection2 = ({ weather, meassure, value, notation }) => {
  return (
    <article className="info_section_2">
      <img
        className={`icons ${meassure}_icon`}
        alt={meassure}
        src={`/images/${meassure}.png`}
      />
      <span className={`text_value ${meassure}_value`}>
        {value} <br />
        {notation}
      </span>
    </article>
  );
};
export default Infosection2;
