import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate />
        <div className="expense-item__description">
          <h2>Shoes</h2>
          <div className="expense-item__price">$855</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
