import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({onClick})=>{

    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)

    return(
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}
export default HeaderCartButton