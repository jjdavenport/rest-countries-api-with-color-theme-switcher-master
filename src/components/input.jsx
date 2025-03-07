import { Search } from "lucide-react";

const Input = () => {
  return (
    <>
      <section className="py-3 pl-6 md:w-4/12 shadow-md rounded-md text-sm dark:bg-darkBlue bg-white flex items-center gap-4">
        <Search className="h-5 w-5 md:h-6 md:w-6 object-cover dark:text-white" />
        <input
          className="focus:outline-none default dark:placeholder:text-white w-full dark:text-white bg-white dark:bg-darkBlue cursor-pointer focus:cursor-auto"
          type="search"
          placeholder="Search for a country..."
        />
      </section>
    </>
  );
};

export default Input;
