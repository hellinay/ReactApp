
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(params) {
   
    console.log(params.filteredExpenses);
      if(params.expenses.length===0 ){
        return <h2  className="expenses-list__fallback">
            Found no Expenses
        </h2>
      }
    return <ul className="expenses-list">
        {params.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
}

export default ExpensesList;