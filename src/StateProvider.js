// Setting up layer
// We need to track the basket
import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use inside the container
export const useStateValue = () => useContext(StateContext);
