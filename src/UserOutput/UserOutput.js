import React from "react";
import './UserOutput.css';
const UserOutput = (props) =>{
    return (
        <div className="UserOutput"> 
            <p> Hi Iam {props.UserName} </p>
            <p> Iam making first assisment in React Course </p>
        </div>
    );
};

export default UserOutput;