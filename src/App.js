import { useState } from "react";
import staticExpenses from "./components/data/StaticExpenses";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

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
