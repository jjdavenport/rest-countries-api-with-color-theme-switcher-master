import lightCrescent from "./assets/light-mode.svg";
import darkCrescent from "./assets/dark-mode.svg";

const Header = ({ onClick, darkMode }) => {
  return (
    <header className="flex justify-between p-4">
      <h1>Where in the world?</h1>
      <button className="flex items-center gap-2" onClick={onClick}>
        <img className="w-4" src={darkMode ? darkCrescent : lightCrescent} />
        Dark mode
      </button>
    </header>
  );
};

export default Header;
