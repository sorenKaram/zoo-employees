import React, { Component } from 'react';
import './App.css';
import Employee from './components-functional/Employee.js';

class App extends Component {
  render() {
    return (
      <div className="App-Root">
        <h1 className="web-header">Colorado River Zoo</h1>
        <div className="employee" ><Employee/></div>
        
      </div>
    );
  }
}

export default App;
