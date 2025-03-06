import { useState } from "react";
import vector from "../assets/vector.svg";

const Filter = ({ region, onClick }) => {
  const [menu, setMenu] = useState(false);

  const toggle = () => setMenu(!menu);
  return (
    <section className="p-4 shadow-lg rounded-md dark:bg-darkBlue bg-white relative">
      <button className="flex items-center gap-6" onClick={toggle}>
        Filter by Region <img className="w-2 object-contain" src={vector} />
      </button>
      {menu && (
        <dialog className="flex flex-col absolute m-0 p-4">
          <ul>
            {region.map((i, index) => (
              <li key={index}>
                <button onClick={() => onClick(i)}>{i}</button>
              </li>
            ))}
          </ul>
        </dialog>
      )}
    </section>
  );
};

export default Filter;
