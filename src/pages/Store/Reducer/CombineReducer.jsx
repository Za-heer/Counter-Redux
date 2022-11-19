import {combineReducers} from "redux";
import{addCounterReducer} from './CounterReducer';

const combineReducer = combineReducers({
    addCounterReducer: addCounterReducer,
});
export default combineReducer;