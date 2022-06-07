//import { } from 'redux'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todos, loading } from './reducers/reducer'



//variable to hold the reducers
const reducers = {
    todos,
    loading
    
}

//houses the thunk
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

//houses all reducers
const rootReducers = combineReducers(reducers)

//making the create store function to make it accessible
export const configureStore = () => createStore(rootReducers, composedEnhancer)