import { redirect } from "next/dist/server/api-utils";
import { authProvider} from "../provider/authProvider";
import React from "react";

export default async function IsAuthenticated({children}){
  const user = await authProvider.getUser();
  if(!user){
    redirect("/login")
  }
    
  return(
    <>{children}</>
  )
}