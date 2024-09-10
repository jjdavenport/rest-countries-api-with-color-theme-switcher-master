import { useState } from "react";
import vector from "./assets/vector.svg";

const Filter = ({ region }) => {
  const [menu, setMenu] = useState(false);

  const toggle = () => setMenu(!menu);
  return (
    <section className="p-4 relative">
      <button className="flex items-center gap-2" onClick={toggle}>
        Filter by Region <img className="w-4" src={vector} />
      </button>
      {menu && (
        <dialog className="flex flex-col absolute m-0 p-4">
          <ul>
            {region.map((i, index) => (
              <li key={index}>
                <button>{i}</button>
              </li>
            ))}
          </ul>
        </dialog>
      )}
    </section>
  );
};

export default Filter;
