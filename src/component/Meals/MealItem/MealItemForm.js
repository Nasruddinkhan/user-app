import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [ammoutIsValid, setAmountIsValid] = useState(true);
  const amountInfoRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountInfoRef.current.value;
    const enteredAmountNumber = +enterAmount;
    if (
      enterAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInfoRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!ammoutIsValid && <p> Please enter a valid amount ( 1-5 ) </p>}
    </form>
  );
};
export default MealItemForm;
