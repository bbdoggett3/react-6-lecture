import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './ducks/userReducer';
import productsReducer from './ducks/productsReducer';
import promiseMiddleware from 'redux-promise-middleware';

const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))