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
        <main className=" flex flex-col gap-8 px-10 py-8">
          <div className="flex justify-between">
            <Input />
            <Filter onClick={filter} region={regions} />
          </div>
          {detail ? (
            <Detail onClick={() => setDetail(null)} data={detail} />
          ) : (
            <ul className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-2  items-center">
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
