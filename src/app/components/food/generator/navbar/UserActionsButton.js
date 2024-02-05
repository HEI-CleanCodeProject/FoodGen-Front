import Link from "next/link";
import React from "react";

export default function UserActionsButton({Icon, label}){
  return(
    <div className="w-[100px] h-[100px] bg-white rounded-lg border m-1 shadow-md">
      <Link className="flex flex-col items-center justify-center w-full h-full block" href={"#"}>
        <Icon className="w-[30px] h-[30px]"/>
        <p className="capitalize">{label}</p>
      </Link>
    </div>
  )
 }