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
  const [regions, setRegions] = useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  const render = (i) => setDetail(i);

  return (
    <>
      <Wrapper>
        <Header />
        <main className="flex flex-col gap-10 px-4 py-6 md:gap-14 md:px-10 md:py-14 lg:px-20 lg:py-16">
          {detail ? (
            <Detail onClick={() => setDetail(null)} data={detail} />
          ) : (
            <>
              <div className="flex flex-col justify-between gap-8 md:flex-row">
                <Input />
                <Filter regions={regions} />
              </div>
              <ul className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:grid-rows-2 lg:gap-14 xl:grid-cols-4 xl:gap-16">
                {data
                  .sort((a, z) => a.name.common.localeCompare(z.name.common))
                  .map((i) => (
                    <Summary key={i.name} data={i} onClick={() => render(i)} />
                  ))}
              </ul>
            </>
          )}
        </main>
      </Wrapper>
    </>
  );
}

export default App;
