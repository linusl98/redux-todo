import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

function Todo(props) {
  return (
    <div className="container">
      <h1 className="todo-title">Todos</h1>
      <ul className="todo-list">
        {/* {this.props.todos.map((todo) => {
          <li className="todo">{todo.text}</li>;
        })} */}
      </ul>
      <style jsx>{`

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(25,25,25,.25);
          padding: 3rem;
          background-color: #fafafa;
        }

        .todo-title {
          margin-bottom: auto;
          margin-top: 0;
          line-height: 1;
        }

        .todo-list {
          font-size: 100%;
          list-style: none;
          width: 100%;
          overflow-x: hidden;
          margin-top: 2rem;
        }

        .todo {
          line-height: 1.5;
          position: relative;
          padding: 0 2.5rem 0 .75rem;
        }

      `}</style>
    </div>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
