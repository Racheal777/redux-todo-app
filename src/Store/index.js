//import { } from 'redux'
import { legacy_createStore as createStore, combineReducers } from 'redux'
import { todos } from './reducers/reducer'



//variable to hold the reducers
const reducers = {
    todos,
}

//houses all reducers
const rootReducers = combineReducers(reducers)

//making the create store function to make it accessible
export const configureStore = () => createStore(rootReducers)