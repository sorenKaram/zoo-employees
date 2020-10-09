import React from 'react';
import Employee from './Employee/Employee';

const employees = (props) => (
    props.employees.map((employee, index) => {
        return <Employee name={employee.name} title={employee.title} level={employee.level} key={employee.id}
        promote={() => props.promote(employee.id)}
        deleteEmployee={() => props.deleteEmployee(index)}
        animals={employee.animals} 
        editDesc={(event) => props.changeDesc(event, employee.id)}
        speciality={employee.speciality}>{employee.description}</Employee>
    })
);

export default employees;