import {  useState } from "react";

import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart  from "./component/Cart/Cart"
import CartProvider from './context/CartProvider'
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }
  const hindCartHandler = () => {
    setCartIsShow(false);
  }
  return (
    <CartProvider >
      {cartIsShow && <Cart onClose={hindCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
