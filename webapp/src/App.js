import React, { Component } from 'react';
import './App.css';
import Employee from './components-functional/Employee.js';

class App extends Component {
  state = {
    persons: [
      {
        name: "Fred", title: "Zookeeper", level: 1, speciality: "Pandas", desc: "Loves animals.", animals: ["grey panda", "pink panda"]
      },
      {
        name: "Tira", title: "Zookeeper", level: 3, speciality: "Mammals, Insects", desc: "Has 7 pets.", animals: []
      },
      {
        name: "Charles", title: "Vet", level: 9, speciality: "Mammals & Reptiles", desc: "Degree from University", animals: ["horse"]
      },
    ]
  };

  promotionHandler = (empToChangeByName) => {
    if(empToChangeByName !== null){
      this.setState(
        this.state.persons.map(emp => {
          if(emp.name === empToChangeByName && emp.level > 1){
            emp.level--;
          }
          return emp;
        })
      );
    }
    else{
      this.setState(
        this.state.persons.map(emp => {
          if(emp.level > 1){
            emp.level--;
          }
          return emp;
        })
      );
    }
  }

  // addAnimalHandler = (animal, empToChangeByName) => {
  //   this.setState(
  //     this.state.persons.map(emp => {
  //       if(emp.name === empToChangeByName){
  //         emp.animals.push(animal)
  //       }
  //       return emp;
  //     })
  //   );
  // }

  changeDescHandler = (test) => {
    this.setState({
      persons: [
        {
          name: "Fred", title: "Zookeeper", level: 1, speciality: "Pandas", desc: test.target.value, animals: ["grey panda", "pink panda"]
        },
        {
          name: "Tira", title: "Zookeeper", level: 3, speciality: "Mammals, Insects", desc: "Has 7 pets.", animals: []
        },
        {
          name: "Charles", title: "Vet", level: 9, speciality: "Mammals & Reptiles", desc: "Degree from University", animals: ["horse"]
        },
      ]
    })
  }

  render() {
    return (
      <div className="App-Root">
        <h1 className="web-header">Colorado River Zoo</h1>
        <button onClick={this.promotionHandler.bind(this, null)}>Promotion!</button>
        <Employee name={this.state.persons[0].name} title={this.state.persons[0].title} level={this.state.persons[0].level} 
        click={this.promotionHandler.bind(this, this.state.persons[0].name)}
        animals={this.state.persons[0].animals} editDesc={this.changeDescHandler}
        speciality={this.state.persons[0].speciality}>{this.state.persons[0].desc}</Employee>
        <Employee name={this.state.persons[1].name} title={this.state.persons[1].title} level={this.state.persons[1].level}
        click={this.promotionHandler.bind(this, this.state.persons[1].name)}
        animals={this.state.persons[1].animals}
        speciality={this.state.persons[1].speciality}>{this.state.persons[1].desc}</Employee>
        <Employee name={this.state.persons[2].name} title={this.state.persons[2].title} level={this.state.persons[2].level}
        click={this.promotionHandler.bind(this, this.state.persons[2].name)}
        animals={this.state.persons[2].animals}
        speciality={this.state.persons[2].speciality}>{this.state.persons[2].desc}</Employee>
        
      </div>
    );
  }
}

export default App;
