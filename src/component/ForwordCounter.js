import Card from "../UI/Card";
import classes from "./BackwordCounter.module.css";
import useCounter from '../hook/use-counter'
const ForwordCounter = () => {
  const counter = useCounter();
  return <Card cssClassName={classes.counter}>{counter}</Card>;
};
export default ForwordCounter;
