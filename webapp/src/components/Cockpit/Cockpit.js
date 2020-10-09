import React, {useContext} from 'react';
import './Cockpit.css';
import AuthContext from '../../context/auth-context';

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

    const authContext = useContext(AuthContext);

    let loginButtonStyle = {...props.buttonStyle};
    
    let loginText = "Log in";
    if(authContext.isAuthenticated){
        loginButtonStyle.backgroundColor = 'green';
        loginButtonStyle.color = 'white';
        loginText = "Log out";
    }

    return (
        <div>
            <h1 className={assignClasses.join(' ')}>Colorado River Zoo</h1>
                <button onClick={authContext.login} style={loginButtonStyle}>{loginText}</button>
            <br/>
            <button style={props.toggleEmployeesButtonStyle} onClick={props.toggleEmployeesHandler}>Toggle Employees</button>
        </div>
    );
}

export default cockpit;