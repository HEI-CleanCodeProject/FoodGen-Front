import React, { createContext, useState } from "react";

const context = createContext();

export const AuthentificationContextProvider = ({children}) => {
  const [state,setState] = useState();
  const initialValue = {
    user:state,
    setUser:setState
  }
  return(
    <context.Provider value={initialValue}>
      {children}
    </context.Provider>
  )
}

export const AuthentificationContext = context;
