import "./styles/ModalIncorrectCity.css";

const ModalWrongCity = ({ correctCityName, toClose }) => {
  return (
    <>
      {correctCityName && (
        <section className="modal_incorrect_city" onClick={toClose}>
          <p className="modal_text">
            City not founded , the name of the city must be well writted{" "}
          </p>
        </section>
      )}
    </>
  );
};
export default ModalWrongCity;
