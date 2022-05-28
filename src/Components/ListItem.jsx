import React from 'react';
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { createTodo, deleteTodo}  from '../Store/actions/action'


//styled component
const Wrapper = styled.div`
border-radius: 4px;
box-shadow: 0 4px 8px gray;
margin: 1em 20rem;
display:flex;
justify-content:space-between;
padding: 11px 15px;

`
const BtnContainer = styled.div`
display:flex;
gap:1rem
`

const Button = styled.button`
padding: 8px 13px;
border:none;
border-radius: 5px;
outline: none;
cursor: pointer;
${props => props.completed && css`
background-color:blueviolet;
color: white
`}

${props => props.delete && css`
background-color: tomato;
color: white
`}

`

const ListItem = ({ task, deleteTodo }) => {
    return (
        <Wrapper>
           
                <h3>{task.text}</h3>
                <BtnContainer>

                <Button completed>change status</Button>
                <Button delete onClick={() => deleteTodo(task.text)}>Delete</Button>

                </BtnContainer>
                
            
        </Wrapper>
    );
}

const mapStateToProps = (state) => ({
    Alltasks: state.todos,
 })


const mapDispatchToProps = (dispatch) => {
   return{
    // addTodo: (obj) => dispatch(addTodos(obj)),
    deleteTodo: (text) => dispatch(deleteTodo(text))
   } 
     
  }
export default connect(mapStateToProps, mapDispatchToProps)( ListItem);
