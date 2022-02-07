import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, {useState} from 'react'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(params) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
  //params.expenses -- > all expenses

  const filteredExpenses = params.expenses.filter(function dateCheck(expense) {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
