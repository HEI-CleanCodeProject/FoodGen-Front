import React from "react";
import "../globals.css";
import Navbar from "../components/food/generator/navbar";
import { FoodModal} from "../components/food/generator/FoodModal";
import ContextProvider from "../contextProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <ContextProvider>
        <FoodModal />
        {children}
      </ContextProvider>
    </>
  );
}