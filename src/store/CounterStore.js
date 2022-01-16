import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggele") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
   if (action.type === "incrementBy10") {
     return {
       counter: state.counter + action.incrementBy,
       showCounter: state.showCounter,
     };
   }
  return state;
};
const store = createStore(counterReducer);

export default store;