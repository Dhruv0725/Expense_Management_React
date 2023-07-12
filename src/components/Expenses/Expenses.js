import { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  let selectedValue = "2020";
  const [dropDownValue, setDropDownValue] = useState("2020");

  const dropDownValueHandler = (value) => {
    selectedValue = value;
    setDropDownValue(value);
    //console.log(selectedValue);
  };

  const checkYear = (item) => {
    const currYear = item.date.getFullYear().toString();

    return currYear === dropDownValue;
  };

  const filteredExpenses = props.items.filter(checkYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={dropDownValue}
          ongetValue={dropDownValueHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} /> {/*** Imp ** */}
        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>

        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expenses;
