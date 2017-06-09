import React, { Component, PropTypes } from 'react';


const propTypes = {};

const defaultProps = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.clear}>clear</button>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
