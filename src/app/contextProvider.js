"use client";
import React from "react";
const { createContext, useState } = require("react");

const context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const openModalAndDispatchData = (data) => {
    setIsOpen(true);
    setData(data);
  };
  const closeModalAndClearData = () => {
    setIsOpen(false);
    setData(null);
  };
  const initialValue = {
    data: data,
    isOpen: isOpen,
    openModalAndDispatchData: openModalAndDispatchData,
    closeModalAndClearData: closeModalAndClearData,
  };
  return <context.Provider value={initialValue}>{children}</context.Provider>;
};

export const Context = context;
export default ContextProvider;
