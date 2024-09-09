const Filter = ({ region }) => {
  return (
    <>
      <label htmlFor="regions">Filter by region</label>
      <select name="regions">
        <option value={region}>{region}</option>
      </select>
    </>
  );
};

export default Filter;
