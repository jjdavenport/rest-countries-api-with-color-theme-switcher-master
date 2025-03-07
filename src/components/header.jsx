import useTheme from "../hooks/theme-provider";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="flex shadow-md bg-white text-sm dark:bg-darkBlue justify-between px-4 md:px-10 py-6">
      <h1 className="md:text-2xl  dark:text-white font-black">
        Where in the world?
      </h1>
      <button
        className="flex gap-2 md:text-base md:gap-3 dark:text-white items-center"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <>
            <svg
              className="h-4 w-4 fill-white"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 292.299 292.299"
            >
              <g>
                <g>
                  <path
                    d="M153.699,292.138C68.95,292.138,0,223.185,0,138.439C0,79.742,32.675,27.002,85.28,0.807
			c2.369-1.174,5.215-0.718,7.077,1.144c1.864,1.864,2.345,4.711,1.183,7.074C83.941,28.527,79.077,49.496,79.077,71.33
			c0,77.972,63.432,141.407,141.395,141.407c22.08,0,43.247-4.978,62.942-14.777c2.366-1.177,5.213-0.721,7.074,1.141
			c1.873,1.867,2.342,4.714,1.177,7.073C265.61,259.195,212.738,292.138,153.699,292.138z"
                  />
                </g>
              </g>
            </svg>
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.539 47.539"
            >
              <g>
                <g>
                  <path
                    style={{ fill: "#010002" }}
                    d="M24.997,47.511C11.214,47.511,0,36.298,0,22.515C0,12.969,5.314,4.392,13.869,0.132
			c0.385-0.191,0.848-0.117,1.151,0.186s0.381,0.766,0.192,1.15C13.651,4.64,12.86,8.05,12.86,11.601
			c0,12.681,10.316,22.997,22.997,22.997c3.59,0,7.033-0.809,10.236-2.403c0.386-0.191,0.848-0.117,1.151,0.186
			c0.304,0.303,0.381,0.766,0.192,1.15C43.196,42.153,34.597,47.511,24.997,47.511z M12.248,3.372C5.862,7.608,2,14.709,2,22.515
			c0,12.68,10.316,22.996,22.997,22.996c7.854,0,14.981-3.898,19.207-10.343c-2.668,0.95-5.464,1.43-8.346,1.43
			c-13.783,0-24.997-11.214-24.997-24.997C10.861,8.761,11.327,6.005,12.248,3.372z"
                  />
                </g>
              </g>
            </svg>
          </>
        )}
        Dark mode
      </button>
    </header>
  );
};

export default Header;
