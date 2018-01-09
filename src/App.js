import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/default.css';
import Header from './components/headerComponent/header';
import HomePage from './components/pages/homepage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
