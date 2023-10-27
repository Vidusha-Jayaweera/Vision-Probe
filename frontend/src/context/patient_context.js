import React, { createContext, useContext, useReducer } from "react";

const SessionContext = createContext();

const initialState = {
  userId: null,
  userEmail: null,
};

const sessionReducer = (state, action) => {
  switch (action.type) {
    case "SET_SESSION":
      return {
        userId: action.payload.userId,
        userEmail: action.payload.userEmail,
      };
    case "CLEAR_SESSION":
      return {
        userId: null,
        userEmail: null,
      };
    default:
      return state;
  }
};

export const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
