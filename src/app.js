import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import configuerestore from './store/configurestore';
import { addExpense, removeExpense, editExpese} from './actions/expenses';
import setVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configuerestore(); 

store.dispatch(addExpense({ description: 'Water bill', amount:1000, createdAt:1000}));
store.dispatch(addExpense({ description: 'Gas bill', amount:2000, createdAt:2000}));
store.dispatch(addExpense({ description: 'Rent ', amount:3000, createdAt:-100}));

const state = store.getState();
const visibleExpenses = setVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
