import lightCrescent from "./assets/light-mode.svg";
import darkCrescent from "./assets/dark-mode.svg";

const Header = ({ onClick, darkMode }) => {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={onClick}>
        <img src={darkMode ? darkCrescent : lightCrescent} />
      </button>
    </header>
  );
};

export default Header;
