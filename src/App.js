import React, { Component } from 'react';
// import Login from './Login/Login.js';
import Main from './Main/Main.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          {/* <Login /> */}
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
