
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, 
    TODOS_FAILURE, TODOS_LOADING, TODOS_SUCCESS, GET_TODOS} from '../actions/action'

//reducer functions, which take state and action as argument
export const todos = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:{
            //if action type is CREATE_TODO
            //then create an object with the payload
            const newTodo = action.payload.text
            // console.log('newtodo', newTodo)
            return [...state, newTodo]
        }

        case DELETE_TODO: {
            const remove = state.filter((item) => item.id !== action.payload.id)
            // console.log("remove", remove)
            // console.log('state', state)
            return [...remove]
        }

        //update
        case UPDATE_TODO: {
            
            // const texts = action.payload.id
            // return [...state]
            const isCompleted = action.payload.isCompleted
            return state.map((item) => {
                // console.log('item', item)
               if(item.id === action.payload.id){
                return {
                    ...item, isCompleted : !item.isCompleted  

                }
                
               }
               
               return item
            })   
            
        }
         //get todos from server   
        case GET_TODOS: {
            // console.log(action.payload.data)
            return action.payload.data
        }
        
           
    
        default:
            return state
            
    }
}

export const loading = (isLoading = false, action) => {
    switch (action.type) {
        case TODOS_LOADING: {
            return isLoading = true 
        }
            
        case TODOS_SUCCESS: {
            return {
                isLoading: false,
                // data : action.payload.todos
            }
        }

        case TODOS_FAILURE: {
            return isLoading = false
        }
    
        default:
            return isLoading 
    }
}