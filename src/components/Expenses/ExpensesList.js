import { ExpenseItem } from './ExpenseItem';

import './ExpensesList.css';

export const ExpensesList = ({ filteredExpenses }) => {

  if (filteredExpenses.length === 0) return (
    <h2 className='expenses-list__fallback'>No expenses found.</h2>
  );

  return (
    <ul className='expenses-list'>
      {filteredExpenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
};