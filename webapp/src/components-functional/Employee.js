import React from 'react';

const employee = ( props ) => {
    return (
        <div>
            <p><b>Name:</b> {props.name} <b> | Title:</b> {props.title} seniority {props.level}<b> | Speciality:</b> {props.speciality}</p>
            <p><b>Description: </b> {props.children}</p>
            <p><b>Animals under care: </b> {props.animals}</p>
            {/* <div><b>Shows:</b>
                <Shows/>
            </div> */}
            <button onClick={props.click}>Promote me!</button>
            <br/>
            <input type="text" onChange={props.editDesc} value={props.children}/>
        </div>
    );
};

export default employee;