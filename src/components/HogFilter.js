
function HogFilter ({greaseFilter, filterGreasedHogs, sortBy, sortHogs}) {

  return (
    <>
      <label for='greased'>Check to see only <i>greased</i> hogs : 
        <input type='checkbox' name='greased' value={greaseFilter} onChange={filterGreasedHogs}></input>
      </label>
      <select name="sort" value={sortBy} onChange={sortHogs}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </>
  );
}

export default HogFilter;