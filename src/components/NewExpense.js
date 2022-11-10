import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css";

const NewExpense = props => {
  const addExpenseHandler = submittedData => {
    const expenseData = {
      ...submittedData,
      id: Math.random().toString()
    };
    // console.log("submittedData: ", submittedData);
    // console.log("props: ", props);
    props.onAdd(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
