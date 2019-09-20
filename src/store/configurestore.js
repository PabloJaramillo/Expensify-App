import { createStore, combineReducers } from 'redux';
import ExpeseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
// Store creatio n

export default () => {
    const store = createStore(
        combineReducers({
            expenses: ExpeseReducer,
            filters: filtersReducer
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );  

    return store;
};
