import React, { Component } from 'react';
import './App.css';
import Employee from './components-functional/Employee.js';

class App extends Component {
  state = {
    persons: [
      {
        id: '0', name: "Fred", title: "Zookeeper", level: 2, speciality: "Pandas", desc: "Likes to be in nature.", animals: ["grey panda", "pink panda"]
      },
      {
        id: '1', name: "Tira", title: "Zookeeper", level: 4, speciality: "Mammals, Insects", desc: "Has 7 animal encyclopedias.", animals: []
      },
      {
        id: '2', name: "Charles", title: "Vet", level: 8, speciality: "Mammals & Reptiles", desc: "Degree from University", animals: ["horse"]
      },
    ],
    showPersons: false
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

  changeDescHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.desc = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deleteEmployeeHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  toggleEmployeesHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '4px solid green',
      padding: '8px',
      margin: '2px',
      cursor: 'pointer'
    }

    return (
      <div className="App-Root">
        <h1 className="web-header">Colorado River Zoo</h1>
        <button style={buttonStyle} onClick={this.toggleEmployeesHandler}>Toggle Employees</button>
        { this.state.showPersons ? 
          <div>
            <button style={buttonStyle} onClick={this.promotionHandler.bind(this, null)}>Promotion!</button>
              { this.state.persons.map((employee, index) => {
                return <Employee name={employee.name} title={employee.title} level={employee.level} key={employee.id}
                promote={this.promotionHandler.bind(this, employee.name)}
                deleteEmployee={() => this.deleteEmployeeHandler(index)}
                animals={employee.animals} 
                editDesc={(event) => this.changeDescHandler(event, employee.id)}
                speciality={employee.speciality}>{employee.desc}</Employee>
              })}
          </div>
          : null
        }
        
        
      </div>
    );
  }
}

export default App;
