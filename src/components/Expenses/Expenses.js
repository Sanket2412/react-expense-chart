import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const FilterExpenseHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onFilterExpense={FilterExpenseHandler} />
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};
export default Expenses;