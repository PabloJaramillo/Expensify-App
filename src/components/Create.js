import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';
import { runInThisContext } from 'vm';

class Addexpensepage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToPrpos = () => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToPrpos)(Addexpensepage);