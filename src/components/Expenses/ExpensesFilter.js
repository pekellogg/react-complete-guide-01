import "../styles/Expenses/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const changeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select year: </label>
        <select
          name="years"
          value={props.selected}
          onChange={changeHandler}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
