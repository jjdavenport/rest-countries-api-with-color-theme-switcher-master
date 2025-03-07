import { useEffect, useState } from "react";

const useTheme = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("scrollbar") &
        document.documentElement.classList.add("scrollbar-thumb-darkBlue") &
        document.documentElement.classList.add(
          "scrollbar-track-veryDarkBlueDarkMode"
        )
      : document.documentElement.classList.remove("scrollbar") &
        document.documentElement.classList.remove("scrollbar-thumb-darkBlue") &
        document.documentElement.classList.remove(
          "scrollbar-track-veryDarkBlueDarkMode"
        );
  }, [darkMode]);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
  };
};

export default useTheme;
