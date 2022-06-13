import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo}  from '../Store/actions/action'
import { create } from '../Store/thunk/thunk'

//connect is use to connect the store to the component
const ListForm = ({ Alltasks, addTodo, created }) =>  {
    const [ input, setInput ] = useState('')
    const inputValue = input.toLowerCase().trim()
    // console.log(Alltasks)
  return (
    <div className='main'>
        <section className='forms'>
            <h1>Soft Life Planner</h1>
            
                <input type="text"
                value={input} 
                onChange = {(e) => setInput(e.target.value)}
                />
                <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
                 onClick={() => {
                  const duplicate = Alltasks.some(todo => todo.text === inputValue)

                  if(!duplicate){
                    created(input)
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
    addTodo: (text) => dispatch(createTodo(text)),
    created: (text) => dispatch(create(text))
     
  })



//connect takes two argument which is mapstatetoprops and mapdispatchtoprops
export default connect(mapStateToProps, mapDispatchToProps)(ListForm)