import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({Input,label},ref)=>{
    return(
        <div className={classes.input}>
            <label htmlFor={Input.id}>{label}</label>
            <input ref={ref} {...Input}/>
        </div>
    )
})
export default Input;