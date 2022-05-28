import React from 'react'
import ListForm from './ListForm'
import ListItem from './ListItem'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => {
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


export default connect(mapStateToProps)(TodoList)


