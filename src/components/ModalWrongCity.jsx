import "./styles/ModalIncorrectCity.css";

const ModalWrongCity = ({ correctCityName, toClose }) => {
  return (
    <>
      {correctCityName && (
        <section className="modal_incorrect_city" onClick={toClose}>
          <article className="modal_text">
            <p className="text_modal">
              City not founded , the name of the city must be well writted
            </p>
          </article>
        </section>
      )}
    </>
  );
};
export default ModalWrongCity;
