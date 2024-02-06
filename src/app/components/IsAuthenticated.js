import { authProvider} from "../provider/authProvider/serverSide";
import React from "react";
import { redirect } from "next/navigation";
import Navbar from "./food/generator/navbar";

export default async function IsAuthenticated({children}){
  // const user = await authProvider.whoami().catch(()=>{
  //  redirect("/login")
  // });
/*  const user = {
    username:"hidden-machina",
    firstname:"cocorico",
    lastname:"banzai",
    email:"test.test@gmail.com"
  }*/
    
  return(
    <>
      <Navbar user={user}/>
      {children}
    </>
  )
}