import ExpenseItem from "./ExpenseItem";
import "../styles/Expenses/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.all.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses!</h2>;
  }

  const displayExpensesList = () => {
    return props.all.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  };

  return <ul className="expenses-list">{displayExpensesList()}</ul>;
};

export default ExpensesList;
