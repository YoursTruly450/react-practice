import './NewExpense.css';

import { ExpenseForm } from './ExpenseForm';

export const NewExpense = ({ onAddExpense }) => {
  const addExpenseHandler = (data) => {
    onAddExpense({
      ...data,
      id: Math.random().toString(),
    });
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};