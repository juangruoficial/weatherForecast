import { useState } from "react";
import "./styles/SearchForm.css";
import "/public/styles/dark.css";

const SearchForm = ({ onSearch, isDark }) => {
  const [cityName, setCityName] = useState("");

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(cityName);
    setCityName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        id="cityName"
        placeholder="Type a city or a country ..."
        className={`info_form_input ${isDark ? "dark_input" : ""}`}
        type="text"
        value={cityName}
        onChange={handleInputChange}
      />
      <button className="info_form_button">Search</button>
    </form>
  );
};

export default SearchForm;
