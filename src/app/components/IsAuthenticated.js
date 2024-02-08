"use client"

import React, { useEffect, useState } from "react";
import Navbar from "./food/generator/navbar";
import { authProvider } from "../provider/authProvider/clientSide";

export default function IsAuthenticated({children}){
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const t = sessionStorage.getItem(process.env.NEXT_PUBLIC_SESSION);
    setToken(t);
  },[])
  
  useEffect(()=>{
    if(token){
      authProvider.whoami(token).then((user)=>{
        setUser(user);
      }).catch((err)=>{
        console.log(err)
      });
    }
  },[token])

  return(
    <>
      <Navbar user={user}/>
      {children}
    </>
  )
}