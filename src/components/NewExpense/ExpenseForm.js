import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(params) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function changeTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function changeAmountHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function changeDateHandler(event) {
    setEnteredDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    params.onSaveExpenseData(ExpenseData);
    //console.log(ExpenseData)
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  }

  function showExpenseForm(params) {}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          ></input>
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={changeAmountHandler}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={changeDateHandler}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="button" onClick={params.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
