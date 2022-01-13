import Card from "../UI/Card"
import classes from "./BackwordCounter.module.css";
import useCounter  from "../hook/use-counter";
const BackwordCounter = () =>{
   const counter = useCounter(false);
    return <Card cssClassName={classes.counter}>{counter}</Card>;
}
export default BackwordCounter;