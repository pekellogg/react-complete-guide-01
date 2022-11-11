import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css";

const NewExpense = (props) => {

  const addExpenseHandler = (newlySubmittedExpense) => {
    const newExpense = {
      ...newlySubmittedExpense,
      id: Math.random().toString()
    };
    props.onAdd(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );

};

export default NewExpense;