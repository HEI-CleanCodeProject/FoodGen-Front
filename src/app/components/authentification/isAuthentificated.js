import { authProvider } from "@/app/providers/authProvider";
import { redirect } from "next/navigation";

async function getUser(){
  const user = await authProvider.getUser();
  return user;
}

export default async function IsAuthentificated({children}){
  const user = await getUser();
  console.log("oke bro")
  if(!user){
    redirect("/login");
  }

  return(
    <>{children}</>
  )
}