import { useState, useEffect } from "react";
let globalState = {};
let listeners = [];
let actions = {};
export const useStore = (isListiner = true) => {
  const setState = useState(globalState)[1];
  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listener of listeners) {
      listener(globalState);
    }
  };
  useEffect(() => {
    if (isListiner)  listeners.push(setState);
    return () => {
     if (isListiner) listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState, isListiner]);
  return [globalState, dispatch];
};
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
