import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo-rev2.jsx';
import addTodo from '../actions/todoActions.jsx';
const propTypes = {};

const defaultProps = {};

const nextTodoID = 0;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="root">
        <TodoList />
        {console.log(this.props.todo.todos)}
        <style jsx global>{`
          .root {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }

          body {
            background: linear-gradient(to right, #fe796c , #ff8d68);
            height: 100%;
            font-family: 'Varela Round', sans-serif;
            color: #2E2E2E;
            font-size: 18px;
            line-height: 1.5;
          }

          html {
            height: 100%;
          }

        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (completed, text) => {
    dispatch(addTodo(completed, text));
  },
});


App.propTypes = propTypes;
App.defaultProps = defaultProps;


export default connect(mapStateToProps, mapDispatchToProps)(App);
