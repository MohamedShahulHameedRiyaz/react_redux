import * as types from "./actionType";

export function beginAPICall(){
    return { type: types.BEGIN_API_CALL };
}

export function endAPICall(){
    return { type: types.END_API_CALL };
}