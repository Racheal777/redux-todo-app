import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
//  import {  updateTodo } from "../Store/actions/action";
import { delete_todo, update_todo } from "../Store/thunk/thunk";

//styled component
const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 8px gray;
  margin: 1em 20rem;
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
      background-color: blueviolet;
      color: white;
    `}

  ${(props) =>
    props.completedd &&
    css`
      background-color: blue;
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

  useEffect(() => {
    // delete_todo()
  }, [delete_todo])
  return (
    <Wrapper
      className="todo"
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
          <Button completed onClick={() => updateTodo(task.id)}>
            Change to Pending
          </Button>
        ) : (
          <Button completedd onClick={() => updateTodo(task.id)}>
            Change to done
          </Button>
        )}

        <Button delete onClick={() => deleteTodo(task.id)}>
          Delete
        </Button>
      </BtnContainer>
    </Wrapper>
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
