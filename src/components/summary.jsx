const Summary = ({ data, onClick }) => {
  return (
    <li className="w-10/12 overflow-hidden rounded-md bg-white text-sm shadow-md dark:bg-darkBlue dark:text-white md:w-full">
      <button className="w-full" onClick={onClick}>
        <img
          className="h-40 w-full object-cover"
          src={data.flags.png}
          alt={data.name.common}
        />
        <div className="flex flex-col gap-4 px-6 pb-12 pt-8 text-left md:px-4 md:pb-10 md:pt-6">
          <span className="text-lg font-black">{data.name.common}</span>
          <ul className="flex flex-col gap-1">
            <li className="font-bold">
              Population:
              <span className="text-darkGrey pl-1 font-normal">
                {data.population.toLocaleString(2)}
              </span>
            </li>
            <li className="font-bold">
              Region:
              <span className="text-darkGrey pl-1 font-normal">
                {data.region}
              </span>
            </li>
            <li className="font-bold">
              Capital:
              <span className="text-darkGrey pl-1 font-normal">
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
