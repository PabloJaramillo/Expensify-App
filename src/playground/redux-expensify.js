import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 
    } = {} 
    ) => ({
    type: 'ADD-EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ( {id} = {} ) => ({
    type:'REMOVE-EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT-EXPENSE',
    id,
    updates
}); 

const setTextFilter = (text = '') => ({
    type: 'SET-TEXT-FILTER',
    text

});

const sortByAmount = () => ({
    type: 'SORT-AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT-DATE',
});

const setStartDate = (date = undefined) => ({
    type: 'SET-START-DATE',
    date
});
const setEndDate = (date = undefined) => ({
    type: 'SET-END-DATE',
    date
});

//expenseReducer
const expenseReducerDefaultState = [];

const ExpeseReducer = (state = expenseReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD-EXPENSE':
           return [
               ...state,
               action.expenses
           ]
        case 'REMOVE-EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT-EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense;
                }
            });
        default:
            return state;
    }

};

//filters Reducer

const filtersReducerDefaultState = { 
    text: '',
    sortBy: 'amount',
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET-TEXT-FILTER':
            return {
                ...state,
                 text:  action.text
            }
        case 'SORT-AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT-DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET-START-DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET-END-DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}
// 1sh january 1970 

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expenses) => {
        const startdateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const enddateMatch =  typeof endDate !== 'number' || expenses.createdAt <= endDate;
        const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase()) ;

        return startdateMatch && enddateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    }) 
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: ExpeseReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 3000 , createdAt:-1000} ));

// store.dispatch(removeExpense({ id: expenseOne.expenses.id}));
// store.dispatch(editExpense( expenseTwo.expenses.id, { amount: 5000}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(900));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'sonme string',
        description: 'February rent',
        note: ' final payment for the rent',
        amount: 13244,
        createdAt:0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',// amount or date
        startDate: undefined,
        endDate: undefined
    }
};