import classes from './Input.module.css';

const Input = ({label,Input})=>{
    return(
        <div className={classes.input}>
            <label htmlFor={Input.id}>{label}</label>
            <input {...Input}/>
        </div>
    )
}
export default Input;