export default function todoReducer(state=[],action){
    switch(action.type){
        case 'CREATE_TODO':
            return [...state,action.todo]
        case 'GET_TODOS':
            return action.todos
        default:
            return state
    } }
