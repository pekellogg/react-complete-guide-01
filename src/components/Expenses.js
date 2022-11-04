import staticExpenses from "./data/StaticExpenses";
import ExpenseItem from "./ExpenseItem";

export default function Expenses() {
  const displayExpenses = () => {
    return staticExpenses.map(({ id, title, amount, date }) => {
      return <ExpenseItem key={id} title={title} amount={amount} date={date} />;
    });
  };

  return (
    <div className="expenses">
      {displayExpenses()}
    </div>
  );
}
