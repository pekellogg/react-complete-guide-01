import { useState } from "react";
import "../styles/Expenses/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const changeHandler = (event) => {
    setUserInput((currentUserInput) => {
      return {
        ...currentUserInput,
        [event.target.className]: event.target.value
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpenseObject = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date)
    };
    props.onAddExpense(newExpenseObject);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            className="title"
            type="text"
            value={userInput.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            className="amount"
            type="number"
            value={userInput.amount}
            onChange={changeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            className="date"
            type="date"
            value={userInput.date}
            onChange={changeHandler}
            min="2022-11-08"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
