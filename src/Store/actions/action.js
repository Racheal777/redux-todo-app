
//exportng variable name which u can pass as dinamic variable
//to the action type
export const CREATE_TODO = 'CREATE_TODO'

export const DELETE_TODO = 'DELETE_TODO'

export const UPDATE_TODO = "UPDATE_TODO"


//action creators contains type and payload

export const createTodo = ( text ) => ({
    type: CREATE_TODO,
    payload: { text , isCompleted : false }
})

//delete action
export const deleteTodo = (text) => ({
    type: DELETE_TODO,
    payload: { text }
})

//update action
export const updateTodo = (text) => ({
    type: UPDATE_TODO,
    payload: { text }
})

