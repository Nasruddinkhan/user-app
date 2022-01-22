import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);


  const cartItem = (
    <ul>
      {items.map((item, idx) => (
        <CartItem
          key={idx}
          item={{
            title: item.name,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
            id: item.id,
          }}
        />
      ))}
    </ul>
  );
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItem}
    </Card>
  );
};

export default Cart;
