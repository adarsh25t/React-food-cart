import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from '../../../store/cart-context'

const MealItem = ({ name, description, price,id }) => {
  
  const cartCtx = useContext(CartContext);

  const Price = `$${price.toFixed(2)}`;
  
  const addTocartHandler = (amount)=>{
    cartCtx.addItem({
      id : id,
      name : name,
      price : price,
      amount : amount
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div>
          <MealItemForm onAddToCart={addTocartHandler}/>
      </div>
    </li>
  );
};
export default MealItem;
