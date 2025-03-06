import { Search } from "lucide-react";

const Input = () => {
  return (
    <>
      <section className="p-4 w-4/12 shadow-lg rounded-lg dark:bg-darkBlue bg-white flex items-center gap-4">
        <Search className="h-5 w-5 dark:text-white" />
        <input
          className="focus:outline-none bg-white dark:bg-darkBlue cursor-pointer focus:cursor-auto"
          type="search"
          placeholder="Search for a country..."
        />
      </section>
    </>
  );
};

export default Input;
