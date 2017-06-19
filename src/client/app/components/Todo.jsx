import React, { PropTypes } from 'react';

const propTypes = {};
const defaultProps = {};

function Todo({ onClick, completed, text }) {
  return (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
