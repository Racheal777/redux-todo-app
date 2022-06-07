import {loading, success, failure,
     createTodo, getTodos, deleteTodo, updateTodo, DELETE_TODO} from '../actions/action'
import axios from 'axios'


//thunk function
//get todos
export const fetchTodos = () => async (dispatch, getState) => {
    try {
       
        // dispatch(loading())
        const response = await axios.get('http://localhost:7000/gettask')

        dispatch(getTodos(response.data))
        if(response.data === ''){
            console.log("nothing to show")
        }
        // console.log(getState)
        // console.log("response", response.data)
    } catch (error) {
        console.log(error)
        // dispatch(failure())
    }
}

//add todo
export const create = (text) => async (dispatch) => {
    try {
       
        // dispatch(loading())
        const response = await axios.post('http://localhost:7000/savepost', {
            text
        })

        dispatch(createTodo(response.data))
        // console.log(getState)
        // console.log("response", response.data)
    } catch (error) {
        console.log(error)
        // dispatch(failure())
    }
}

//delete
export const delete_todo = (id) => async (dispatch) => {
    try {
       
        // dispatch(loading())
        
        // const id = deleteTodo(id)
        const response = await axios.delete(`http://localhost:7000/delete/${id}`)

        dispatch(deleteTodo(response.data))
        // console.log(getState)
        console.log("response", response.data)
    } catch (error) {
        console.log(error)
        // dispatch(failure())
    }
}

//updating a todo
export const update_todo = (id) => async (dispatch) => {
    try {
       
        // dispatch(loading())
        
        // const id = deleteTodo(id)
        const response = await axios.put(`http://localhost:7000/update/${id}`)

        dispatch(updateTodo(response.data))
        // console.log(getState)
        // console.log("response", response.data)
    } catch (error) {
        console.log(error)
        // dispatch(failure())
    }
}