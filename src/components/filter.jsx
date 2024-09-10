const Filter = ({ region }) => {
  return (
    <section className="p-4">
      <select className="cursor-pointer">
        <option>Filter by Region</option>
        {region.map((i, index) => (
          <option key={index} value={i}>
            {i}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filter;
