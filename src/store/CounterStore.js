import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const initialAuthState = {
  isAuthenticated: false,
};
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

const authSlice = createSlice({
  name: "authentication",
  initialState:initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
