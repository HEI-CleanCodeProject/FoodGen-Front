"use client"

import React, { useEffect, useState } from "react";
import Navbar from "./food/generator/navbar";
import { authProvider } from "../provider/authProvider/clientSide";
import Router from "next/router";
import ProvideToken from "../provider/sessionProvider";

function IsAuthenticatedLogique({children, token}){
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    console.log("whoami")
    if(token){
      authProvider.whoami(token).then((user)=>{
        setUser(user);
      }).catch((err)=>{
        sessionStorage.removeItem(process.env.NEXT_PUBLIC_SESSION)
        Router.push("/login")
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

export default function IsAuthenticated({children}){
  return (
    <ProvideToken
      Component={(token)=>(
          <IsAuthenticatedLogique token={token}>
            {children}
          </IsAuthenticatedLogique>
        )
      }
    />
  )
}
