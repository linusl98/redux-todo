import React from 'react';
import { connect } from 'react-redux';
import { addTodo, clearAllTodo, clearCompletedTodos } from '../actions/index.jsx';


let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
        <button
          onClick={() => {
            dispatch(clearAllTodo());
          }}
        >
          Clear all
        </button>
        <button
          onClick={() => {
            dispatch(clearCompletedTodos());
          }}
        >
          Clear completed
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
