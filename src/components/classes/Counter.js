import { Component } from "react";
import { connect } from "react-redux";
import classes from "../Counter.module.css";


class Counter extends Component {
 
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToPrps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchPrps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "increment" }),
  };
};
export default connect(mapStateToPrps, mapDispatchPrps)(Counter);
