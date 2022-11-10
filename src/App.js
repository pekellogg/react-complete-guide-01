import React from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

const App = () => {
  const addHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAdd={addHandler} />
      <Expenses />
    </div>
  );
};

export default App;
