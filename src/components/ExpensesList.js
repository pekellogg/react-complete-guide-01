import ExpenseItem from "./ExpenseItem";
import "./styles/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.all.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.all.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
