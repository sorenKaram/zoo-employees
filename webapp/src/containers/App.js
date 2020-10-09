import React, { Component } from 'react';
import './App.css';
import Employees from '../components/Employees/Employees';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    employees: [
      {
        id: '0', name: "Fred", title: "Zookeeper", level: 2, speciality: "Pandas", desc: "Likes to be in nature.", animals: ["grey panda", "pink panda"],
        shows: [
          {
              id: 'dolphinFeeding',
              title: 'Feeding dolphins',
              time: '3 pm',
              highlights: 'See trained dolphins!',
              isScheduled: true
          },
          {
              id: 'stingrayPetting',
              title: 'Petting stingray',
              time: '9 am',
              highlights: 'Pet the fearsome stingrays!',
              isScheduled: false
          },
          {
              id: 'swingingApes',
              title: 'Swinging Apes',
              time: '11 am',
              highlights: 'Watch monkeys swing from vines!',
              isScheduled: true
          }
      ]
      },
      {
        id: '1', name: "Tira", title: "Zookeeper", level: 4, speciality: "Mammals, Insects", desc: "Has 7 animal encyclopedias.", animals: []
      },
      {
        id: '2', name: "Charles", title: "Vet", level: 8, speciality: "Mammals & Reptiles", desc: "Degree from University", animals: ["horse"]
      },
    ],
    showEmployees: false,
    isAuthenticated: false
  };

  promotionHandler = (empId) => {
    
    if(empId !== null){     
      this.setState(
        this.state.employees.map(emp => {
          if(emp.id === empId && emp.level > 1){
            emp.level--;
          }
          return emp;
        })
      );
    }
    else{
      this.setState(
        this.state.employees.map(emp => {
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
  //     this.state.employees.map(emp => {
  //       if(emp.name === empToChangeByName){
  //         emp.animals.push(animal)
  //       }
  //       return emp;
  //     })
  //   );
  // }

  loginHandler = () => {
    const loginStatus = this.state.isAuthenticated;
    this.setState({isAuthenticated: !loginStatus});
  }

  changeDescHandler = (event, id) => {
    const personIndex = this.state.employees.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.employees[personIndex]};
    person.desc = event.target.value;
    const employees = [...this.state.employees];
    employees[personIndex] = person;

    this.setState( {employees: employees} );
  }

  deleteEmployeeHandler = (index) => {
    const employees = this.state.employees.slice();
    employees.splice(index, 1);
    this.setState({employees: employees});
  }

  toggleEmployeesHandler = () => {
    const showEmp = this.state.showEmployees;
    this.setState({showEmployees: !showEmp});
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '4px solid green',
      padding: '8px',
      margin: '2px',
      cursor: 'pointer',
      color: 'black'
    }

    let employees = null;

    let toggleEmployeesButtonStyle = {...buttonStyle};

    if(this.state.showEmployees){
      
      employees = (
        <div>
          <button style={buttonStyle} onClick={this.promotionHandler.bind(this, null)}>Promotion!</button>
          <Employees 
            employees={this.state.employees} 
            promote={this.promotionHandler} 
            changeDesc={this.changeDescHandler}
            deleteEmployee={this.deleteEmployeeHandler}/>
        </div>
      )

      toggleEmployeesButtonStyle.backgroundColor = 'green';
      toggleEmployeesButtonStyle.color = 'white';
    }

    return (
      <div className="App-Root">
        <AuthContext.Provider value={{isAuthenticated: this.state.isAuthenticated, login: this.loginHandler}}>
          <Cockpit 
            showEmployees={this.state.showEmployees} 
            employees={this.state.employees} 
            buttonStyle={buttonStyle}
            toggleEmployeesButtonStyle={toggleEmployeesButtonStyle}
            toggleEmployeesHandler={this.toggleEmployeesHandler} />
          {employees} 
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
