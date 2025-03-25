import React from "react";
/* import Radium  from 'radium'; */

const person = (props) => {
    const style = {
       border : "1px solid black",
       margin : "20px" ,
       padding : "20px" ,
      
    }

    return (
            <div style={style}> 
                my name is { props.name }
                <p>Iam a person with { props.age } years old  </p>
                <p> {props.children} </p>
                <p onClick={props.click}> Iam trying clicking the function from here </p>
                <input type="text" onChange={props.changed} value={props.name} />
            </div>  
    ) 
};

export default person; 