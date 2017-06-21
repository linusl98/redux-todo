import React, { PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
const propTypes = {};
const defaultProps = {};


function Todo({ onClick, completed, text, style }) {
  return (
    <li onClick={onClick} className="list-item" style={style}>
      {text}
      <style jsx>{`
        .list-item {

        }
      `}</style>
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
