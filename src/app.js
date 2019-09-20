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

const jsx = (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
