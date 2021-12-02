import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onFilterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear 
  })

  return (
    <div>
      {" "}
      <div>
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChangeHandler={onFilterChangeHandler}
        />
      </div>
      {filteredExpenses.length === 0 ? <p>No expenses found</p> : filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </div>
  );
}

export default Expenses;
