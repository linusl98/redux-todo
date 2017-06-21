import React, { PropTypes } from 'react';
import { TransitionMotion, spring } from 'react-motion';

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

const willLeave = () => ({ x: spring(-100) });
const willEnter = () => ({ x: -100 });
const defaultProps = {};

function TodoList({ todos, onTodoClick }) {
  return (
    <ul className="todo-list">
      <TransitionMotion
        willEnter={willEnter}
        willLeave={willLeave}
        styles={todos.map(todo => ({
          key: todo.id.toString(),
          style: { x: spring(0) },
          data: {
            style: { textDecoration: todo.completed ? 'line-through' : '' },
            text: todo.text,
            completed: todo.completed,
            onClick: () => onTodoClick(todo.id),
          },
        }))}
      >
        {interpolatedStyles =>
          <div>
            {interpolatedStyles.map(style => (
              <div key={style.key} style={{ transform: `translateX(${style.style.x}px)` }}>
                <Todo
                  key={style.key}
                  completed={style.data.completed}
                  text={style.data.text}
                  onClick={style.data.onClick}
                  style={style.data.style}
                />
              </div>
                ))

              }
          </div>
          }
      </TransitionMotion>
      <style jsx>{`
      .todo-list {
        overflow: hidden;
        padding: 5%;
        font-size: 20px;
        height: 400px;
      }
    `}</style>
    </ul>
  );
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
