import React, { Component, PropTypes } from 'react';
import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';

const propTypes = {};

const defaultProps = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <h1 className="title">Todos</h1>
          <VisibleTodoList />
          <AddTodo />
          <Footer />
        </div>
        <style jsx global>{`
          html, body {
            height: 100%;
            background: linear-gradient(to right, #fd786b , #ff8d69);
          }

          #root {
            height: 100%;
          }

          .title {
            text-align: center;
            margin-bottom: 10%;
            font-size: 45px;
          }

          .container {
            width: 35%;
            margin: auto;
            top: 50%;
            padding-top: 20%;
            font-family: 'Varela Round', sans-serif;
          }

          .content {
            background-color: #fafafa;
            padding: 5%;
            box-shadow: 3px 3px 5px;
            border-radius: 5px;
          }
        `}</style>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
