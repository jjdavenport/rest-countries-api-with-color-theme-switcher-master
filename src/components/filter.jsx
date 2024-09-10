const Filter = ({ region }) => {
  return (
    <>
      <section>
        <label className="p-4" htmlFor="regions">
          Filter by region
        </label>
        <select name="regions">
          <option value={region}>{region}</option>
        </select>
      </section>
    </>
  );
};

export default Filter;
