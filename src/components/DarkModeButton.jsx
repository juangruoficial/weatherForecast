function DarkModeButton({ isDark, toggleDarkMode }) {
  return (
    <button className="button_dark_mode" onClick={toggleDarkMode}>
      <img
        className="dark_mode_icon"
        src={`/images/${isDark ? "night-mode" : "day-mode"}.png`}
        alt=""
      />
    </button>
  );
}

export default DarkModeButton;
