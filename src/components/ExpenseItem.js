import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {

  return (
    <Card>
      <ExpenseDate {...props} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
