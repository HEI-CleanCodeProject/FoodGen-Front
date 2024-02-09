"use client"

import { useRouter } from "next/navigation";
import React,{ useEffect, useState } from "react"

export default function ProvideToken({Component}){
  const router = useRouter()
  const [token, setToken] = useState("");
  useEffect(() => {
    const t = sessionStorage.getItem(process.env.NEXT_PUBLIC_SESSION);
<<<<<<< HEAD
    console.log(t + "asd;flkasdf;lkj kaka");
    if(!t){
=======
    if (!t) {
>>>>>>> 46c63e8e8dd65bfde2197509310339810444fb58
      router.push("/login");
    } else {
      setToken(t);
    }
<<<<<<< HEAD
  },[token])
  console.log(token)
  if(token === "") return <></>;
  return(
    <Component token={token}/>
  )
=======
  }, [router]); 
  if (token === "") return <></>;
  return <Component token={token} />;
>>>>>>> 46c63e8e8dd65bfde2197509310339810444fb58
}