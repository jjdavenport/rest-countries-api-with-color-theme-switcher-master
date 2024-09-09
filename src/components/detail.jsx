import arrow from "./assets/arrow.svg";

const Detail = ({ img }) => {
  return (
    <>
      <article>
        <button>
          <img src={arrow} alt={arrow} /> Back
        </button>
        <img src={img} />
        <span>{img}</span>
        <ul>
          <li>{img}</li>
          <li>{img}</li>
          <li>{img}</li>
          <li>{img}</li>
          <li>{img}</li>
        </ul>
        <ul>
          <li>{img}</li>
          <li>{img}</li>
          <li>{img}</li>
        </ul>
        <span>{img}</span>
        <ul>
          <li>
            <button>{img}</button>
          </li>
          <li>
            <button>{img}</button>
          </li>
          <li>
            <button>{img}</button>
          </li>
        </ul>
      </article>
    </>
  );
};

export default Detail;
