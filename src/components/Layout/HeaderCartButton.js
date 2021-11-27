import React,{useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({onClick})=>{
    const [btnHighLighted,setBtnHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)
    
    const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ""}`

    useEffect(() => {
       
        if(cartCtx.items.length === 0){
            return;
        } 

        setBtnHighLighted(true);

        const timer = setTimeout(() => {
            setBtnHighLighted(false)
        }, 300);
        
        return(
            clearTimeout(timer)
        )
        
    }, [cartCtx])
    return(
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}
export default HeaderCartButton