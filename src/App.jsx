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
      <div className="flex flex-col gap-2">
        <Header onClick={toggle} darkMode={darkMode} />
        <Input />
        <Filter region={data.region} />
        <section>
          <ul className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-2 p-4 items-center">
            {data
              .filter((i) =>
                [
                  "Germany",
                  "United States",
                  "Brazil",
                  "Iceland",
                  "Afghanistan",
                  "Åland Islands",
                  "Albania",
                  "Algeria",
                ].includes(i.name.common)
              )
              .map((i) => (
                <li key={i.cca3}>
                  {!detail ? (
                    <Summary
                      onClick={render}
                      img={i.flags.png}
                      name={i.name.common}
                      population={i.population}
                      region={i.region}
                      capital={i.capital?.[0]}
                    />
                  ) : (
                    <Detail
                      img={i.flags.png}
                      name={i.name.common}
                      population={i.population}
                      region={i.region}
                      capital={i.capital?.[0]}
                    />
                  )}
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
