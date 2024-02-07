"use client"

import React, { useEffect, useState } from "react";
import Navbar from "./food/generator/navbar";
import { authProvider } from "../provider/authProvider/clientSide";

export default function IsAuthenticated({children}){
  const [user,setUser] = useState(null);
  
  useEffect(()=>{
   authProvider.whoami().then((u)=>{
    setUser(u)
   });
  },[user])
  // const user = {
  //   username:"hidden-machina",
  //   firstname:"cocorico",
  //   lastname:"banzai",
  //   email:"test.test@gmail.com"
  // }
  if(!user) null

  return(
    <>
      <Navbar user={user}/>
      {children}
    </>
  )
}