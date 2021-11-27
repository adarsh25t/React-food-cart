import { Fragment } from "react";
import HeaderImg from "../../assets/meals.jpg";
import classes from './Header.module.css';

const Header = ()=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>FoodHub</h1>
            </header>
            <div className={classes['main-image']}>
                <img src={HeaderImg} alt="" />
            </div>
        </Fragment>
    )
}
export default Header;