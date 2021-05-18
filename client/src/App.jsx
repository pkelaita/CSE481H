import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('hello world');
  }

  render() {
    return (
      <div className="App-intro">
        <LoginPage />
      </div>
    );
  }
}

export default App;
