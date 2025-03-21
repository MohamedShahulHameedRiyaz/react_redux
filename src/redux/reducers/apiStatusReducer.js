import * as types from '../action/actionType'
import initialState from './initialState'

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function apiStatusReducer(state = initialState.apiCallsInProgress,action){
    console.log(action.type);
    if(action.type == types.BEGIN_API_CALL){
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type)){
        return state - 1;
    } else if (action.type == types.END_API_CALL){
        return state - 1;
    }
    return state;
}