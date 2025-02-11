import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import todoReducer from './todoReducer';
import apiStatusReducer from './apiStatusReducer';

const rootReducer = combineReducers({
    courseReducer,
    todos: todoReducer,
    apiStatus: apiStatusReducer
})

export default rootReducer
