const Summary = ({ data, onClick }) => {
  return (
    <li className="text-sm bg-white w-10/12 shadow-md rounded-md overflow-hidden dark:text-white dark:bg-darkBlue">
      <button className="w-full" onClick={onClick}>
        <img
          className="object-cover w-full h-40"
          src={data.flags.png}
          alt={data.name.common}
        />
        <div className="flex flex-col gap-4 text-left px-4 pt-6 pb-10">
          <span className="text-lg font-black">{data.name.common}</span>
          <ul className="flex flex-col gap-1">
            <li className="font-bold">
              Population:
              <span className="pl-1 text-darkGrey font-normal">
                {data.population.toLocaleString(2)}
              </span>
            </li>
            <li className="font-bold">
              Region:
              <span className="pl-1 text-darkGrey font-normal">
                {data.region}
              </span>
            </li>
            <li className="font-bold">
              Capital:
              <span className="pl-1 text-darkGrey font-normal">
                {data.capital}
              </span>
            </li>
          </ul>
        </div>
      </button>
    </li>
  );
};

export default Summary;
