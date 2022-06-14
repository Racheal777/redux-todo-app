import React, {useEffect} from 'react'
import ListForm from './ListForm'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { fetchTodos, delete_todo } from '../Store/thunk/thunk'
// import { useEffect } from 'react'

const TodoList = ({ todos, allData }) => {
 
  useEffect(() => {
    allData()
  }, [allData])

  return (
    <div>
        <section>
           <ListForm/>

           {todos.map((todo, id) => (
               
                    <ListItem task = {todo} key={id} /> 
              

           ))}

           {todos.length < 1 && <span className='text-xl text-pink-600 font-bold' >Nothing to do yet</span>}
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


