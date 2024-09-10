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
  const [detail, setDetail] = useState(null);
  const [data, setData] = useState([]);
  const regions = [
    ...new Set(
      data.sort((a, z) => a.region.localeCompare(z.region)).map((i) => i.region)
    ),
  ];

  const render = (i) => setDetail(i);

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
      console.log("Error, using backup data", error);
      setData(backup);
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
        <Filter region={regions} />
        <main>
          {detail ? (
            <Detail
              img={detail.flags.png}
              name={detail.name.common}
              population={detail.population}
              region={detail.region}
              capital={detail.capital?.[0]}
              subRegion={detail.subregion}
              native={Object.values(detail.name.nativeName)[0]?.common}
              back={() => setDetail(null)}
              domain={detail.tld?.[0]}
              language={Object.values(detail.languages).join(", ")}
              border={detail.borders}
              currency={Object.values(detail.currencies)
                .map((i) => i.name)
                .join(", ")}
              alt={detail.flags.alt}
            />
          ) : (
            <ul className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-2 p-4 items-center">
              {data
                .sort((a, z) => a.name.common.localeCompare(z.name.common))
                .map((i) => (
                  <li key={i.cca3}>
                    <Summary
                      alt={i.flags.alt}
                      onClick={() => render(i)}
                      img={i.flags.png}
                      name={i.name.common}
                      population={i.population}
                      region={i.region}
                      capital={i.capital?.[0]}
                    />
                  </li>
                ))}
            </ul>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
