const Input = () => {
  return (
    <>
      <section className="flex items-center gap-4 rounded-md bg-white py-2 pl-6 text-sm shadow-md dark:bg-darkBlue md:w-4/12">
        <svg
          className="h-8"
          enableBackground="new 0 0 50 50"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-darkGray dark:fill-white"
            d="m20.745 32.62c2.883 0 5.606-1.022 7.773-2.881l10.534 10.561c.195.196.452.294.708.294.255 0 .511-.097.706-.292.391-.39.392-1.023.002-1.414l-10.543-10.569c3.947-4.714 3.717-11.773-.705-16.205-2.264-2.27-5.274-3.52-8.476-3.52s-6.212 1.25-8.476 3.52c-4.671 4.683-4.671 12.304 0 16.987 2.265 2.269 5.275 3.519 8.477 3.519zm-7.06-19.094c1.886-1.891 4.393-2.932 7.06-2.932s5.174 1.041 7.06 2.932c3.895 3.905 3.895 10.258 0 14.163-1.886 1.891-4.393 2.932-7.06 2.932s-5.174-1.041-7.06-2.932c-3.894-3.905-3.894-10.258 0-14.163z"
            fill="#231f20"
          />
        </svg>
        <input
          className="default w-full cursor-pointer bg-white placeholder:text-darkGray focus:cursor-auto focus:outline-none dark:bg-darkBlue dark:text-white dark:placeholder:text-white"
          type="search"
          placeholder="Search for a country..."
        />
      </section>
    </>
  );
};

export default Input;
