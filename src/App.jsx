import { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Filter from "./components/filter";
import Summary from "./components/summary";
import Detail from "./components/detail";
import useData from "./hooks/data-provider";
import Wrapper from "./components/wrapper";

function App() {
  const { data } = useData();
  const [detail, setDetail] = useState(null);
  const [regionsData, setRegionsData] = useState({
    africa: "Africa",
    americas: "Americas",
    antarctic: "Antarctic",
    asia: "Asia",
    europe: "Europe",
    oceania: "Oceania",
  });
  const [filterData, setFilterData] = useState([]);
  const render = (i) => setDetail(i);

  const filter = (region) => {
    const filtered = data.filter((i) => i.region === region);
    setRegionsData(filtered);
  };

  const regions = [
    ...new Set(
      data.sort((a, z) => a.region.localeCompare(z.region)).map((i) => i.region)
    ),
  ];

  return (
    <>
      <Wrapper>
        <Header />
        <main className="flex flex-col gap-10 md:gap-14 px-4 md:px-10 py-6 md:py-14">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <Input />
            <Filter onClick={filter} region={regions} />
          </div>
          {detail ? (
            <Detail onClick={() => setDetail(null)} data={detail} />
          ) : (
            <ul className="flex flex-col gap-16 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:grid-rows-2 items-center">
              {data
                .sort((a, z) => a.name.common.localeCompare(z.name.common))
                .map((i) => (
                  <Summary key={i.name} data={i} onClick={() => render(i)} />
                ))}
            </ul>
          )}
        </main>
      </Wrapper>
    </>
  );
}

export default App;
