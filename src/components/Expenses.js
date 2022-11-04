import staticExpenses from "./data/StaticExpenses";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./styles/Expenses.css";

export default function Expenses() {
  const displayExpenses = () => {
    return staticExpenses.map(({ id, title, amount, date }) => {
      return <ExpenseItem key={id} title={title} amount={amount} date={date} />;
    });
  };

  return <Card className="expenses">{displayExpenses()}</Card>;
}
