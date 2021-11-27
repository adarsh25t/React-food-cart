import React,{useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({id,onAddToCart})=>{
    const [amountIsValid,setamountisValid] = useState(true);
    const amountInputRef = useRef()

    const submitHandler = (event)=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber > 5){
            setamountisValid(false)
            return;
        }

        onAddToCart(enteredAmountNumber);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" 
                ref = {amountInputRef}
                Input={{
                id: 'amount_' + id,
                type : "number",
                min : '1',
                max : '5',
                steps : '1',
                defaultValue : "1"
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount! (1-5)</p>}
        </form>
    )
}
export default MealItemForm;