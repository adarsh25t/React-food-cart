import classes from './Cart.module.css';

const Cart = ()=>{
    return(
        <div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>32.56</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
}
export default Cart;