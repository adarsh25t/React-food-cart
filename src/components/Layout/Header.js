import { Fragment } from "react";
import HeaderImg from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = ({showCart})=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h3>FoodHub</h3>
                <HeaderCartButton onClick={showCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={HeaderImg} alt="" />
            </div>
        </Fragment>
    )
}
export default Header;