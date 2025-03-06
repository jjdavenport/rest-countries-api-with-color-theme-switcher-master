const Summary = ({ data, onClick }) => {
  return (
    <li className="text-sm bg-white shadow-lg dark:text-white dark:bg-darkBlue">
      <button onClick={onClick}>
        <img src={data.flags.png} alt={data.name.common} />
        <div className="flex flex-col gap-4 text-left p-4">
          <span className="text-lg">{data.name.common}</span>
          <ul className="flex flex-col gap-1">
            <li>Population: {data.population}</li>
            <li>Region: {data.region}</li>
            <li>Capital: {data.capital}</li>
          </ul>
        </div>
      </button>
    </li>
  );
};

export default Summary;
