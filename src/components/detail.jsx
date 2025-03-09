import { useEffect } from "react";

const Detail = ({ data, onClick, onBorder }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <article className="flex flex-col gap-14 p-4 text-base dark:text-white md:p-0 lg:gap-16">
        <button
          className="flex w-fit items-center gap-2 rounded-md bg-white px-8 py-2 shadow-2xl dark:bg-darkBlue"
          onClick={onClick}
        >
          <svg
            className="h-5 w-5 dark:fill-white"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 476.213 476.213"
          >
            <polygon
              points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
	57.427,253.107 476.213,253.107 "
            />
          </svg>
          Back
        </button>
        <div className="flex flex-col gap-10 lg:flex-row xl:gap-20">
          <img className="lg:w-1/2" src={data.flags.png} />
          <div className="flex flex-1 flex-col gap-4 lg:justify-center">
            <div className="flex flex-col gap-4 md:gap-8">
              <span className="text-xl font-extrabold md:text-2xl lg:text-4xl">
                {data.name.common}
              </span>
              <div className="flex flex-col gap-4 whitespace-nowrap lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-1">
                    <li>
                      Native name:{" "}
                      {Object.values(data.name.nativeName)[0]?.common}
                    </li>
                    <li>Population: {data.population.toLocaleString(2)}</li>
                    <li>Region: {data.region}</li>
                    <li>Sub Region: {data.subregion}</li>
                    <li>Capital: {data.capital}</li>
                  </ul>
                </div>
                <ul className="flex flex-col gap-1">
                  <li>Top Level Domain: {data.tld}</li>
                  <li>Currencies: {Object.values(data.currencies)[0]?.name}</li>
                  <li className="flex gap-1">
                    Languages:
                    {Object.values(data.languages).map((language, index) => (
                      <span key={index}>
                        {language}
                        {index < Object.values(data.languages).length - 1
                          ? ", "
                          : ""}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
              {data.borders && data.borders.length > 0 ? (
                <>
                  <div className="flex flex-col gap-2 xl:flex-row">
                    <span>Border Countries:</span>
                    <ul className="flex flex-wrap gap-2">
                      {data.borders.map((border, index) => (
                        <li key={index}>
                          <button
                            onClick={onBorder}
                            className="rounded-sm px-4 py-1 text-sm shadow-md dark:bg-darkBlue"
                          >
                            {border}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Detail;
