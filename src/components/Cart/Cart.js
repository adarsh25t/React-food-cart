import react, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ closeCart }) => {
  const CartCtx = useContext(CartContext);
  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasItem = CartCtx.items.length > 1;

  const cartItemRemoveHandler = (id)=>{
      CartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item)=>{
      CartCtx.addItem({...item,amount:1});
  }

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => {
        return <CartItem key={item.id} 
                        name={item.name} 
                        price={item.price} 
                        amount={item.amount}
                        onRemove={cartItemRemoveHandler.bind(null,item.id)}
                        onAdd={cartItemAddHandler.bind(null,item)}/>;
      })}
    </ul>
  );

  return (
    <Modal closeCart={closeCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCart}>
          close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
