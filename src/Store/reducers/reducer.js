
import { CREATE_TODO, DELETE_TODO} from '../actions/action'

//reducer functions, which take state and action as argument
export const todos = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:{
            //if action type is CREATE_TODO
            //then create an object with the payload
            const newTodo = action.payload
            console.log('newtodo', newTodo)
            return [...state, newTodo]
        }

        case DELETE_TODO: {
            const remove = state.filter((item) => item.text !== action.payload.text)
            console.log(remove)
            console.log('state', state)
            return [... remove]
        }
            
            
    
        default:
            return state
            
    }
}