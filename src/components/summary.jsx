const Summary = ({ img, name, region, population, capital }) => {
  return (
    <>
      <button>
        <img src={img} />
        <span>{name}</span>
        <ul>
          <li>{population}</li>
          <li>{region}</li>
          <li>{capital}</li>
        </ul>
      </button>
    </>
  );
};

export default Summary;
