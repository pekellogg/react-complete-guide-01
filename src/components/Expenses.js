import React, { useState } from "react";
import staticExpenses from "./data/StaticExpenses";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "./styles/Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const displayExpenses = () => {
    return staticExpenses.map(({ id, title, amount, date }) => {
      return (
        <ExpenseItem
          key={id}
          title={title}
          amount={amount}
          date={date}
        />
      );
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        {displayExpenses()}
      </Card>
    </div>
  );
};

export default Expenses;
