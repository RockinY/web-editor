import React, { Component } from 'react';
import Demo from './demo'
import Switch from "react-switch"
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  handleChange = (checked) => {
    this.setState({ checked })
  }

  render() {
    return (
      <div>
        <header className="header-wrappper">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
          />
        </header>
        <div className="demo-wrappper">
          <Demo readOnly={this.state.checked} />
        </div>
      </div>
    );
  }
}

export default App;
