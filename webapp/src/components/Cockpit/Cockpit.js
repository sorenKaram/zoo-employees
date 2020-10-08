import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    let assignClasses = ['headerBackground', 'headerColor'];
    if (props.employees.length === 2){
      assignClasses.pop();
    }
    if (props.employees.length === 1){
      assignClasses.push('headerColor');
    }
    if (props.employees.length === 0){
      assignClasses.pop();
    }

    return (
        <div>
            <h1 className={assignClasses.join(' ')}>Colorado River Zoo</h1>
            <button style={props.buttonToggleStyle} onClick={props.toggleEmployeesHandler}>Toggle Employees</button>
        </div>
    );
}

export default cockpit;