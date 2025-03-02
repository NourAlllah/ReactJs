import React from 'react';
const style ={
    border : '2px solid red'
}
const UserInput = (props) => {
    return <input type='text' onChange={props.changed} value={props.currentName} style={style}/>;
};

export default UserInput;