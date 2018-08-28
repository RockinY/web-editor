import React, { Component } from 'react';
import Demo from './demo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="header-wrappper">
          <h1>Demo</h1>
        </header>
        <div className="demo-wrappper">
          <Demo />
        </div>
      </div>
    );
  }
}

export default App;
