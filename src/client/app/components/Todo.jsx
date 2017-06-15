import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};


let input = '';

function handleInputChange(event) {
  input = event.target.value;
}


function Todo(props) {
  return (
    <div className="container">
      <h1 className="todo-title">Todos</h1>
      <ul className="todo-list">
        {props.todos.map(todo => (
          <li className="todo" key={todo.id}>{todo.text}</li>
          ))}
      </ul>
      <div className="add-todo">
        <input className="add-todo__input" onChange={handleInputChange} type="text" />
        <button onClick={props.addTodo(input)}>+</button>
      </div>
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

        .add-todo {
          position: relative;
          margin-top: 20px;
          margin-bottom: 20px;
          &__input {
            text-align: center;
            color: #fafafa;
            line-height: 1;
            font-size: 150%;

          }
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
