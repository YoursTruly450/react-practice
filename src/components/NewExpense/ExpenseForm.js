import { useState } from 'react';

import './ExpenseForm.css';

export const ExpenseForm = ({ onAddExpense }) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('2019-01-01');

  const [ userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '2019-01-01',
  });

  const [formHidden, setFormHidden] = useState(true);

  // const titleChangeHandler = (e) => {
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredTitle: e.target.value,
  //   }));
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredAmount: e.target.value,
  //   }));
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredDate: e.target.value,
  //   }));
  // };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    onAddExpense(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '2019-01-01',
    })
  
    hideForm();
  };

  const inputChangeHandler = (ident, value) => {
    setUserInput((prev) => {
      const obj = { ...prev };
      obj[ident] = value;
      return obj;
    });
  };

  const showForm = () => {
    setFormHidden(false);
  };

  const hideForm = () => {
    setFormHidden(true);
  };

  if (formHidden) {
    return (
      <button onClick={showForm}>Add New Expense</button>
    );
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={event => inputChangeHandler('enteredTitle', event.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={userInput.enteredAmount}
            min='0.01'
            step='0.01'
            onChange={event => inputChangeHandler('enteredAmount', event.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={userInput.enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={event => inputChangeHandler('enteredDate', event.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={hideForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};