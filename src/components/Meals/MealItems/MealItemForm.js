import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({id})=>{

    const submitHandler = (event)=>{
        event.preventDefault();
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" Input={{
                id: 'amount_' + id,
                type : "number",
                min : '1',
                max : '5',
                steps : '1',
                defaultValue : "1"
            }}/>
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm;