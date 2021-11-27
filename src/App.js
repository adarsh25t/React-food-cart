import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider";

function App() {

  const [cartIsShow,SetcartIsShow] = useState(false);

  const showCartHandler = ()=>{
    SetcartIsShow(true)
  }

  const closeCartHandler = ()=>{
    SetcartIsShow(false);
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart closeCart={closeCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
