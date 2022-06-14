import {loading, success, failure,
     createTodo, getTodos, deleteTodo, updateTodo, DELETE_TODO} from '../actions/action'
import axios from 'axios'


//thunk function
//get todos
//function that returns another function as an argument
//we dispatch the action creator in the actions folder
export const fetchTodos = () => async (dispatch, getState) => {
    try {
       
        dispatch(loading())
        const response = await axios.get('http://localhost:7000/gettask')

        dispatch(getTodos(response.data))
        dispatch(success())
    } catch (error) {
        console.log(error)
        dispatch(failure())
    }
}

//add todo
//function that returns another function as an argument
//we dispatch the action creator in the actions folder
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
//function that returns another function as an argument
//we dispatch the action creator in the actions folder
export const delete_todo = (id) => async (dispatch) => {
    try {
       
        // dispatch(loading())
        
        // const id = deleteTodo(id)
        const response = await axios.delete(`http://localhost:7000/delete/${id}`)

        dispatch(deleteTodo(response.data.id))
        console.log('id', id)
        console.log("response", response.data)
    } catch (error) {
        console.log(error)
        // dispatch(failure())
    }
}

//updating a todo with the id
//function that returns another function as an argument
//we dispatch the action creator in the actions folder
export const update_todo = (id) => async (dispatch) => {
    try {
       
        // dispatch(loading())
        
        // const id = deleteTodo(id)
        const response = await axios.put(`http://localhost:7000/update/${id}`)

        dispatch(updateTodo(id))
        console.log(id)
        console.log("response", response.data)
    } catch (error) {
        console.log(error)
        // dispatch(failure())
    }
}