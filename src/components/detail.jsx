const Detail = ({ data, onClick }) => {
  return (
    <>
      <article className="p-4 text-base flex flex-col dark:text-white gap-2">
        <button
          className="flex bg-white shadow-md dark:bg-darkBlue w-fit py-2 px-8 rounded-md items-center gap-2"
          onClick={onClick}
        >
          <svg
            className="w-5 h-5 dark:fill-white"
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
        <img src={data.flags.png} alt={`Flag of ${data.name}`} />
        <span>{data.name.common}</span>
        <ul>
          <li>{data.nativeName}</li>
          <li>Population: {data.population}</li>
          <li>Region: {data.region}</li>
          <li>Sub Region: {data.subregion}</li>
          <li>Capital: {data.capital}</li>
        </ul>
        <ul>
          <li>{data.topLevelDomain}</li>
          <li>{data.currencies[0]}</li>
          <li>{data.languages[0]}</li>
          <li>{data.topLevelDomain}</li>
          <li>{data.currencies[0]}</li>
          <li>{data.languages[0]}</li>
        </ul>
        {data.borders && data.borders.length > 0 ? (
          <>
            <span>Borders</span>
            <ul className="flex gap-2">
              {data.borders.map((border, index) => (
                <li key={index}>
                  <button>{border}</button>
                  <button>{border}</button>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </article>
    </>
  );
};

export default Detail;
