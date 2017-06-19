import React, { PropTypes } from 'react';

import Todo from './Todo.jsx';
const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

const defaultProps = {};

function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />,
     )}
    </ul>
  );
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
