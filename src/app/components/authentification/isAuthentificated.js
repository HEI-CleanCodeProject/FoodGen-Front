import React, { useContext, useEffect } from "react";
import { authProvider } from "@/app/providers/authProvider";
import { AuthentificationContext } from "@/app/context/AuthentificationContextProvider";
import { useRouter } from "next/navigation";

export default function IsAuthentificated({children}){
  const router = useRouter();
  const {user, setUser} = useContext(AuthentificationContext);
  useEffect(()=>{
      authProvider.verifyAuthentificationByToken()
      .then((user)=>{
        setUser(user);
      }).catch(()=>{
        router.push("/login")
      })
  },[user])

  return(
    <>{user ? children : null}</>
  )
}