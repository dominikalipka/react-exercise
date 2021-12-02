import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

import React, {useState} from 'react'

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated!')
  }

  return (
    <Card>
      <ExpenseDate {...props} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
