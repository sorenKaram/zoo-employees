import React, { Component } from 'react';
import './App.css';
import Employee from './components-functional/Employee.js';

class App extends Component {
  state = {
    persons: [
      {name: "Fred", title: "Zookeeper", level: 1, speciality: "Pandas", desc: "Loves animals."},
      {name: "Tira", title: "Zookeeper", level: 2, speciality: "Badgers", desc: "Has 7 pets."},
      {name: "Charles", title: "Vet", level: 5, speciality: "Mammals & Reptiles", desc: "Degree from University"},
    ]
  };

  promotionHandler = () => {
    console.log('wat clicked');

    this.setState(
      this.state.persons.map(emp => {
        if(emp.level > 1){
          emp.level--;
        }
      })
    );
  };

  render() {
    return (
      <div className="App-Root">
        <h1 className="web-header">Colorado River Zoo</h1>
        <button onClick={this.promotionHandler}>Promotion!</button>
        <Employee name={this.state.persons[0].name} title={this.state.persons[0].title} level={this.state.persons[0].level} 
        speciality={this.state.persons[0].speciality}>{this.state.persons[0].desc}</Employee>
        <Employee name={this.state.persons[1].name} title={this.state.persons[1].title} level={this.state.persons[1].level}
        speciality={this.state.persons[1].speciality}>{this.state.persons[1].desc}</Employee>
        <Employee name={this.state.persons[2].name} title={this.state.persons[2].title} level={this.state.persons[2].level}
        speciality={this.state.persons[2].speciality}>{this.state.persons[2].desc}</Employee>
        
      </div>
    );
  }
}

export default App;
