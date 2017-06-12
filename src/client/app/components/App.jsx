import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo.jsx';

const propTypes = {};

const defaultProps = {};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="root">
        {console.log(this.props.todo)}
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

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return ({
    todo: state.todoReducer,
  });
};

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => {
    dispatch({
      type: 'ADD',
      payload: text,
    });
  },
});


App.propTypes = propTypes;
App.defaultProps = defaultProps;


export default connect(mapStateToProps, mapDispatchToProps)(App);
