import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
//  import {  updateTodo } from "../Store/actions/action";
import { delete_todo, update_todo } from "../Store/thunk/thunk";

//styled component
const Wrapper = styled.div`
  border-radius: 4px;
  
   box-shadow: 0 3px 8px gray;
  //  margin: 1em auto;
   align-items: center;
  display: flex;

  justify-content: space-between;
  padding: 11px 15px;
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 8px 13px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  ${(props) =>
    props.completed &&
    css`
      
      color: white;
    `}

  ${(props) =>
    props.completedd &&
    css`
      
      color: white;
    `}

${(props) =>
    props.delete &&
    css`
      background-color: tomato;
      color: white;
    `}
`;

const ListItem = ({ task, deleteTodo, updateTodo }) => {

  
  return (
    <div className="">

    <Wrapper
      className="todo md:mx-auto mx-2 mt-4 mb-4 md:mt-4 md:w-1/2  shadow-2xl  "
      style={
        task.isCompleted === true
          ? { backgroundColor: "grey" }
          : { textDecoration: "none" }
      }
    >
      <h3
        className="todo"
        style={
          task.isCompleted === true
            ? {  textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {task.text}
      </h3>

      

      <BtnContainer>
        {task.isCompleted === true ? (
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 hover:from-cyan-500 hover:to-blue-500"
           completed onClick={() => updateTodo(task.id)}>
            Pending
          </Button>
        ) : (
          <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 hover:from-cyan-500 hover:to-blue-500"
          completedd onClick={() => updateTodo(task.id)}>
            Done
          </Button>
        )}

        <Button className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-900 hover:from-pink-500 hover:to-rose-700"
        delete onClick={() => deleteTodo(task.id)}>
          Delete
        </Button>
      </BtnContainer>
    </Wrapper>

    </div>
  );
};

// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(delete_todo(id)),
    updateTodo: (id) => dispatch(update_todo(id)),
  };
};
export default connect(null, mapDispatchToProps)(ListItem);
