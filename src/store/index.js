import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore( rootReducer, devTools );

export default store;
