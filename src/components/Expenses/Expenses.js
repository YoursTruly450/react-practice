import { useState } from 'react';

import { ExpensesFilter } from '../ExpenseFilter/ExpensesFilter';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';

import './Expenses.css';

export const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('2021');

  // let filterInfoText = '2019, 2021, & 2022';
  
  // if (year === '2019') {
  //   filterInfoText = '2020, 2021, & 2022';
  // } else if (year === '2020') {
  //   filterInfoText = '2019, 2021, & 2022';
  // } else {
  //   filterInfoText = '2019, 2020, & 2021';
  // }

  const filteredExpenses = expenses.filter(({ date }) => date.getFullYear().toString() === year);

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem expense={expense} key={expense.id} />
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onSelectYear={selectYearHandler} year={year}/>
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      {expensesContent}
      {/* <ExpenseItem expense={expenses[0]}/>
      <ExpenseItem expense={expenses[1]}/>
      <ExpenseItem expense={expenses[1]}/> */}
    </Card>
  );
};