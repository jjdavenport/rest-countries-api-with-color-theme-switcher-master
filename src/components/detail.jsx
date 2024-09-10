import arrow from "./assets/arrow.svg";

const Detail = ({
  img,
  name,
  population,
  region,
  capital,
  subRegion,
  native,
  back,
  domain,
  language,
  border,
  currency,
  alt,
}) => {
  return (
    <>
      <article className="p-4 flex flex-col gap-2">
        <button className="flex items-center gap-2" onClick={back}>
          <img className="w-4" src={arrow} alt={arrow} /> Back
        </button>
        <img src={img} alt={alt} />
        <span>{name}</span>
        <ul>
          <li>{native}</li>
          <li>{population}</li>
          <li>{region}</li>
          <li>{subRegion}</li>
          <li>{capital}</li>
        </ul>
        <ul>
          <li>{domain}</li>
          <li>{currency}</li>
          <li>{language}</li>
        </ul>
        {border && border.length > 0 ? (
          <>
            <span>Borders</span>
            <ul className="flex gap-2">
              {border.map((i, index) => (
                <li key={index}>
                  <button>{i}</button>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </article>
    </>
  );
};

export default Detail;
