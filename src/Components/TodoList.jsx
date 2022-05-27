import React from 'react'
import ListForm from './ListForm'
import ListItem from './ListItem'

export default function TodoList({ todos = [{ text : "jogging"}] }) {
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
