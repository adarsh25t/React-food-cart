import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({id})=>{
    return(
        <div className={classes.form}>
            <Input label="Amount" Input={{
                id: 'amount_' + id,
                type : "number",
                min : '1',
                max : '5',
                steps : '1',
                defaultValue : "1"
            }}/>
            <button>+ Add</button>
        </div>
    )
}
export default MealItemForm;