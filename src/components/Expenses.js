import { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./styles/Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filtered = props.all.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList all={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;
