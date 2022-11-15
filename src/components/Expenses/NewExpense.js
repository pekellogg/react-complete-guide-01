import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../styles/NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpenseHandler = (newlySubmittedExpense) => {
    const newExpense = {
      ...newlySubmittedExpense,
      id: Math.random().toString()
    };
    props.onAdd(newExpense);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
