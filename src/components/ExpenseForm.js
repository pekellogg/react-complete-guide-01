import React, { useState } from "react";
import "./styles/ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // console.log(userInput);

  const titleChangeHandler = (event) => {
    console.log(event);
    setUserInput((prev) => {
      return {
        ...prev,
        enteredTitle: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredDate: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredAmount: event.target.value,
      };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2022-11-08"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
