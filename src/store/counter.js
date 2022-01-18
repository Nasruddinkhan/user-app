import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
      console.log(state.counter);
    },
    decrement(state) {
      state.counter--;
      console.log(state.counter);
    },
    toggele(state) {
      state.showCounter = !state.showCounter;
      console.log(state.showCounter);
    },
    incrementBy10(state, action) {
      state.counter = state.counter + action.payload;
      console.log(state.counter);
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
