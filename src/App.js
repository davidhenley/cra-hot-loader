import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.counter}</h2>
        </div>
        <p className="App-intro">
          Here is some code
          <div>
            <button onClick={this.increment}>
              Increment counter
            </button>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
