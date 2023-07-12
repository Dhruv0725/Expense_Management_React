import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  //   const expenseDate = new Date(
  //     2000 + Math.floor(20 * Math.random()) + 1,
  //     Math.floor(12 * Math.random()),
  //     Math.floor(30 * Math.random())
  //   );
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = Math.floor(1000 * Math.random() * 100) / 100 + 1;

  //setTimeout(() => setTitle("Timer Update"), 2000);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
