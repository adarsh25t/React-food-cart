import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsShow,SetcartIsShow] = useState(false);

  const showCartHandler = ()=>{
    SetcartIsShow(true)
  }

  const closeCartHandler = ()=>{
    SetcartIsShow(false);
  }

  return (
    <Fragment>
      {cartIsShow && <Cart closeCart={closeCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
