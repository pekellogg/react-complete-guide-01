import { useState } from "react";
import staticExpenses from "./components/Expenses/StaticExpenses";
import NewExpense from "./components/Expenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState(staticExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="main">
      <NewExpense onAdd={addExpenseHandler} />
      <Expenses all={expenses} />
    </div>
  );
};

export default App;
