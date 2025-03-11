import React from "react";

const Validation = (props) =>{
    let lenghtValidation ='Text is too short!';
    if (props.inputLenght > 5) {
        lenghtValidation ='Text is long enough!';
    }
    return (
        <div>
            <p>{lenghtValidation}</p>
        </div>
    );

}

export default Validation;