import React from 'react';
import PropTypes from 'prop-types';
import './Employee.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';


const employee = ( props ) => {
    const buttonStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '2px solid green',
        padding: '4px',
        margin: '4px',
        cursor: 'pointer'
      }

    return (
        <Aux>  
            <p><b>Name:</b> {props.name} <b> | Title:</b> {props.title} seniority {props.level}<b> | Speciality:</b> {props.speciality}</p>
            <p><b>Description: </b> {props.children}</p>
            <input type="text" onChange={props.editDesc} value={props.children}/>
            <button style={buttonStyle}>Save Description</button>
            <p><b>Animals under care: </b> {props.animals}</p>
            {/* <div><b>Shows:</b>
                <Shows/>
            </div> */}
            <AuthContext.Consumer>
                {context => 
                    context.isAuthenticated ? 
                    <Aux>
                        <button style={buttonStyle} onClick={props.promote}>Promote me!</button>
                        <button style={buttonStyle} onClick={props.deleteEmployee}>Delete me</button>
                    </Aux>
                    : <p>Please login in order to promote or delete employees.</p>
                }
            </AuthContext.Consumer>
        </Aux>
    );
};

employee.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    level: PropTypes.number,
    speciality: PropTypes.string,
    animals: PropTypes.arrayOf(PropTypes.any),
    promote: PropTypes.func,
    deleleEmployee: PropTypes.func
};

export default withClass(employee, 'Employee');