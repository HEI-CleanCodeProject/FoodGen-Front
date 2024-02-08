"use client"

import React,{ useEffect, useState } from "react"

export default function ProvideToken({Component}){
  const [token, setToken] = useState(null);
  useEffect(()=>{
    const t = sessionStorage.getItem(process.env.NEXT_PUBLIC_SESSION);
    if(t){
        setToken(t);
    }
  },[]);
  if(!token) return null;
  return(
    <Component token={token}/>
  )
}