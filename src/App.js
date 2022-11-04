import staticExpenses from "./components/data/StaticExpenses";
import ExpenseItem from "./components/ExpenseItem";

export default function App() {
  const displayExpenses = () => {
    return staticExpenses.map(({ id, title, amount, date }) => {
      return <ExpenseItem key={id} title={title} amount={amount} date={date} />;
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      {displayExpenses()}
    </div>
  );
}
