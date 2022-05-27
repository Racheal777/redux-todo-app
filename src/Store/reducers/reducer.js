
import { CREATE_TODO} from '../actions/action'


export const todos = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:{
            //if action type is CREATE_TODO
            //then create an object with the payload
            const newTodo = action.payload
            console.log('newtodo', newTodo)
            return [...state, newTodo]
        }

            
            
    
        default:
            return state
            
    }
}