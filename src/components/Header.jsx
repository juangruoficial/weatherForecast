const Header = ({ isDark, mainTitle }) => {
  return (
    <>
      <h1 className={`title_main_section ${isDark ? "dark_text" : ""}`}>
        {mainTitle}
      </h1>
    </>
  );
};
export default Header;
