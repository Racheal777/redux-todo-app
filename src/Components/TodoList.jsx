import React, {useEffect} from 'react'
import ListForm from './ListForm'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { fetchTodos, delete_todo } from '../Store/thunk/thunk'
// import { useEffect } from 'react'

const TodoList = ({ todos, allData }) => {
 
  useEffect(() => {
    allData()
  }, [allData, todos])

  return (
    <div>
        <section>
           <ListForm/>

           {todos.map((todo, id) => (
               
                    <ListItem task = {todo} key={id} /> 
              

           ))}
        </section>
    </div>
  )

}

const mapStateToProps = (state) => ({
    todos: state.todos,
 })

 const mapDispatchToProps = (dispatch) =>({
    allData : () => dispatch(fetchTodos())
 })


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


