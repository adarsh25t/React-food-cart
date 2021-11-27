import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({closeCart})=>{

   const cartItem = (
       <ul className={classes['cart-items']}>
           {[{
               id:'c1',
               name:'food',
               amount:2,
               price:12.4
           }].map(item=>{
               return(<li>{item.name}</li>)
           })
           }
       </ul>
   )

    return(
        <Modal closeCart={closeCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>32.56</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeCart}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;