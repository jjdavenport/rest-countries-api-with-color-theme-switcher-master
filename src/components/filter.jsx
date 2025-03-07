import { useState } from "react";

const Filter = ({ region, onClick }) => {
  const [menu, setMenu] = useState(false);

  const toggle = () => setMenu(!menu);
  return (
    <section className="p-4 text-sm shadow-lg rounded-md dark:bg-darkBlue bg-white relative">
      <button
        className="flex dark:text-white items-center gap-6"
        onClick={toggle}
      >
        Filter by Region
        <svg
          className={`w-3 h-3 ${
            menu ? "rotate-0 " : "rotate-180"
          } dark:fill-white transition-all duration-300 ease-in-out`}
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </button>
      {menu && (
        <div className="flex bg-white left-0 top-16 w-full rounded-md absolute dark:bg-darkBlue flex-col  m-0 p-4">
          <ul className="flex flex-col gap-1">
            {region.map((i, index) => (
              <li key={index}>
                <button className="dark:text-white" onClick={() => onClick(i)}>
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Filter;
