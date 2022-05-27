import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo}  from '../Store/actions/action'

//connect is use to connect the store to the component
const ListForm = ({ tasks, addTodo }) =>  {
    const [ input, setInput ] = useState('')
    console.log(tasks)
  return (
    <div className='main'>
        <section className='forms'>
            <h1>Todo App</h1>
            
                <input type="text"
                value={input} 
                onChange = {(e) => setInput(e.target.value)}/>
                <button onClick={() => addTodo(input)}>Add a List</button>
           
        </section>
    </div>
  )
}

//connect is a higher order function
  const mapStateToProps = (state) => ({
     tasks: state.todos,
  })

  const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(createTodo(text))
     
  })




export default connect(mapStateToProps, mapDispatchToProps)(ListForm)