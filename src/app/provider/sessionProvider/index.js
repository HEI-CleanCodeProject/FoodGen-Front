"use client"

import { useRouter } from "next/navigation";
import React,{ useEffect, useState } from "react"

export default function ProvideToken({Component}){
  const router = useRouter()
  const [token, setToken] = useState("");
  useEffect(() => {
    const t = sessionStorage.getItem(process.env.NEXT_PUBLIC_SESSION);
    if (!t) {
      router.push("/login");
    } else {
      setToken(t);
    }
  },[token, router])
  console.log(token)
  if(token === "") return <></>;
  return(
    <Component token={token}/>
  )
}