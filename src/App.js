import { Fragment, useState } from "react";

import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart  from "./component/Cart/Cart"
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }
  const hindCartHandler = () => {
    setCartIsShow(false);
  }
  return (
    <Fragment>
      {cartIsShow && <Cart onClose={hindCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
