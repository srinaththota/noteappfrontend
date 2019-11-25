import React from 'react';
import classes from './Messages.css';
const Messages=(props)=>{
    return(
       <div className={classes.displayconent} >
    
    <p className={classes.note} onClick={props.clicked}>{props.message} </p>
    </div>
    )
}
export default Messages;