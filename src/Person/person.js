import React from "react";

const person = (props) => {
    return (
        <div> 
            my name is { props.name }
            <p>Iam a person with { props.age } years old  </p>
            <p> {props.children} </p>
            <p onClick={props.click}> Iam trying clicking the function from here </p>
            <input type="text" onChange={props.changed} />
        </div>   
    ) 
};

export default person; 