import React from "react"
import "./ExpenseDate.css"

const ExpenseDate=(props)=>{
    return(
        <div className="expense-date">
            <div className="expense-date__month">Oct</div>
            <div className="expense-date__year">2022</div>
            <div className="expense-date__day">Mon</div>
        </div>
    );
}
export default ExpenseDate;