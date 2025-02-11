import { beginAPICall, endAPICall } from "./apiStatusAction"

export function createTodo(todo){
    return { type: "CREATE_TODO", todo }
}

export function getTodos(todos){
    return { type: "GET_TODOS",todos }
}

export function loadTodos(){
    return function (dispatch){
        dispatch(beginAPICall());
         fetch('https://dummyjson.com/todos')
        .then(async(res) => {
           return await res.json();
        } )
        .then(data => {
            dispatch(getTodos(data.todos));
            dispatch(endAPICall());
        })
        .catch(e => {throw e})
    }
}