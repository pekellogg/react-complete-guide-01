import { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import staticExpenses from "./StaticExpenses";
import NewExpense from "./NewExpense";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "../styles/Expenses/Expenses.css";

const Expenses = () => {
  const [expenses, setExpenses] = useState(staticExpenses);
  const [selectedYear, setSelectedYear] = useState("");

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => [expense, ...previousExpenses]);
  };

  const filtered = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div className="expenses">
      <Card className="expenses">
        <NewExpense onAdd={addExpenseHandler} />
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filtered} />
        <ExpensesList expenses={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;
