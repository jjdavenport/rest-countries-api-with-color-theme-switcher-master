import { useEffect, useState } from "react";
import Header from "./components/header";
import backup from "./components/assets/data.json";
import Input from "./components/input";
import Filter from "./components/filter";
import Summary from "./components/summary";
import Detail from "./components/detail";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [detail, setDetail] = useState(false);
  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);

  const render = () => setDetail(true);
  const toggle = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header onClick={toggle} darkMode={darkMode} />
      <Input />
      <Filter region={data.region} />
      {data.map((country, index) => (
        <section key={country.cca3 || index}>
          {!detail ? (
            <Summary
              onClick={render}
              img={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          ) : (
            <Detail
              img={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          )}
        </section>
      ))}
    </>
  );
}

export default App;
