import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    console.log(counter);
    dispatch(counterActions.toggele());
  };
  const incrementHandler = () => {
    console.log(counterActions.increment());
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    console.log(counterActions.decrement());

    dispatch(counterActions.decrement());
  };
  const incrementBy10Handler = () => {
    dispatch(counterActions.incrementBy10(10));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
     {show &&  <div>
        <button onClick={incrementBy10Handler}>Increment By 10</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div> }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
