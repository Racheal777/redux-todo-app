import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo}  from '../Store/actions/action'

//connect is use to connect the store to the component
const ListForm = ({ Alltasks, addTodo }) =>  {
    const [ input, setInput ] = useState('')
    const inputValue = input.toLowerCase().trim()
    console.log(Alltasks)
  return (
    <div className='main'>
        <section className='forms'>
            <h1>Todo App</h1>
            
                <input type="text"
                value={input} 
                onChange = {(e) => setInput(e.target.value)}
                />
                <button onClick={() => {
                  const duplicate = Alltasks.some(todo => todo.text === inputValue)

                  if(!duplicate){
                    addTodo(input)
                    setInput('')

                  }else{
                    alert(`${inputValue} is already added`)
                  }
                  
            }}>Add a List</button>
           
        </section>
    </div>
  )
}

//connect is a higher order function not needed
  const mapStateToProps = (state) => ({
     Alltasks: state.todos,
  })

  //fuction for dispatching what is inside the reducer

  const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(createTodo(text))
     
  })



//connect takes two argument which is mapstatetoprops and mapdispatchtoprops
export default connect(mapStateToProps, mapDispatchToProps)(ListForm)