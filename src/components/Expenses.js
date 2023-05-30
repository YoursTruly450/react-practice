import { ExpenseItem } from './ExpenseItem';
import { Card } from './Card';

import './Expenses.css';

export const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      <ExpenseItem expense={expenses[0]}/>
      <ExpenseItem expense={expenses[1]}/>
      <ExpenseItem expense={expenses[1]}/>
    </Card>
  );
};