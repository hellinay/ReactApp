import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

function NewExpense(params) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    params.onAddExpense(expenseData);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
     { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;
