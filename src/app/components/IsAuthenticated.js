import React from "react";
import Navbar from "./food/generator/navbar";
import { authProvider } from "../provider/authProvider/serverSide";

export default async function IsAuthenticated({children}){
  const tsyuser = (await authProvider.whoami()).data;
  
  const user = {
    username:"hidden-machina",
    firstname:"cocorico",
    lastname:"banzai",
    email:"test.test@gmail.com"
  }
    
  return(
    <>
      <Navbar user={user}/>
      {children}
    </>
  )
}