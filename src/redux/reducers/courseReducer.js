export default function courseReducer (state=[],action) {
    switch(action.type){
        case 'CREATE_COURSE':
            return [ ...state,{...action.course}];
        case 'GET_COURSE':
            return ['Shahul','Riyaz','Mohamed'];
        default:
            return state;        
    } }