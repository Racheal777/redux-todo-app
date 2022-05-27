
//exportng variable name which u can pass as dinamic variable
//to the action type
export const CREATE_TODO = 'CREATE_TODO'

//action creators contains type and payload

export const createTodo = ( text ) => ({
    type: CREATE_TODO,
    payload: { text , isCompleted:false}
})