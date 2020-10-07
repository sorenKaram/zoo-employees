import React from 'react';
import './Employee.css';

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
        <div className="Employee">
            <p><b>Name:</b> {props.name} <b> | Title:</b> {props.title} seniority {props.level}<b> | Speciality:</b> {props.speciality}</p>
            <p><b>Description: </b> {props.children}</p>
            <p><b>Animals under care: </b> {props.animals}</p>
            {/* <div><b>Shows:</b>
                <Shows/>
            </div> */}
            <button style={buttonStyle} onClick={props.promote}>Promote me!</button>
            <button style={buttonStyle} onClick={props.deleteEmployee}>Delete me</button>

            
            <br/>
            <input type="text" onChange={props.editDesc} value={props.children}/>
        </div>
    );
};

export default employee;