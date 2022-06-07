
//exportng variable name which u can pass as dinamic variable
//to the action type
export const CREATE_TODO = 'CREATE_TODO'

export const DELETE_TODO = 'DELETE_TODO'

export const UPDATE_TODO = "UPDATE_TODO"
export const GET_TODOS = "GET_TODOS"

export const TODOS_LOADING = "TODOS_LOADING"

export const TODOS_SUCCESS = "TODOS_SUCCESS"

export const TODOS_FAILURE = "TODOS_FAILURE"


//action creators contains type and payload

export const createTodo = ( text ) => ({
    type: CREATE_TODO,
    payload: { text }
})

//delete action
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id }
})

//update action
export const updateTodo = (id) => ({
    type: UPDATE_TODO,
    payload: { id }
})


//loading
export const getTodos = (data) => ({
    type: GET_TODOS,
    payload: { data }
})


export const loading = () => ({
    type: TODOS_LOADING,
   
})


export const success = (todos) => ({
    type: TODOS_SUCCESS,
    payload: { todos }
})


export const failure = () => ({
    type: TODOS_FAILURE,
    // payload: { data }
})

