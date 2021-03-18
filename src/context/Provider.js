import React, { createContext, useReducer } from "react";
import authInitialSttate from "./initialStates/authInitialSttate";
import auth from "./reducers/auth";

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [authState, autDispatch] = useReducer(auth, authInitialSttate);
  return (
    <GlobalContext.Provider
      value={{
        authState,
        autDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
