import { useState } from 'react';

import { ExpensesFilter } from '../ExpenseFilter/ExpensesFilter';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';

import './Expenses.css';

export const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('2021');

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(year);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter onSelectYear={selectYearHandler} year={year}/>
      <Card className='expenses'>
        <ExpenseItem expense={expenses[0]}/>
        <ExpenseItem expense={expenses[1]}/>
        <ExpenseItem expense={expenses[1]}/>
      </Card>
    </Card>
  );
};