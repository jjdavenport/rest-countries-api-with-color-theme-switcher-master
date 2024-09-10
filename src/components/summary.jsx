const Summary = ({ img, name, region, population, capital, onClick, alt }) => {
  return (
    <>
      <button onClick={onClick}>
        <img src={img} alt={alt} />
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
