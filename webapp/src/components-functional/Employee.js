import React from 'react';

const employee = ( props ) => {
    return (
        <div>
            <p><b>Name:</b> {props.name} <b> | Title:</b> {props.title} seniority {props.level}<b> | Speciality:</b> {props.speciality}</p>
            <p><b>Description: </b> {props.children}</p>
            <p><b>Animals under care: </b></p>
            {/* <div><b>Shows:</b>
                <Shows/>
            </div> */}
        </div>
    );
};

export default employee;