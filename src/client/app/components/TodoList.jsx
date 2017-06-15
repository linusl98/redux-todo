import React, { PropTypes } from 'react';

import Todo from './Todo-rev2.jsx';
const propTypes = {};

const defaultProps = {};

function TodoList(todos, onTodoClick) {
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
