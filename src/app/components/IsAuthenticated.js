import { authProvider} from "../provider/authProvider/serverSide";
import React from "react";
import { redirect } from "next/navigation";

export default async function IsAuthenticated({children}){
  const user = await authProvider.getUser().catch(()=>{
   redirect("/login")
  });
  if(!user){
    redirect("/login")
  }
    
  return(
    <>{children}</>
  )
}