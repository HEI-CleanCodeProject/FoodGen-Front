"use client"

import React, { useEffect, useState } from "react";
import RegenerateIcon from "@/app/components/icons/RegenerateIcon";
import { ListMeals } from "@/app/components/food/generator/listMeals";
import ProvideToken from "@/app/provider/sessionProvider";

function GeneratorLogique({UI, token}){
  return(
    <UI token={token}/>
  )
}

function GeneratorUI({token}) {
  return (
    <div data-testId="generator" >
      <div className="p-2">
        <div>
          <h3 className="p-3">Most loved meals</h3>
          <div className="flex flex-wrap row">
          </div>
        </div>
        <hr className="bg-color-2 w-4/5 m-6" />
        <div className="flex row flex-wrap">
          <ListMeals token={token}/>
        </div>
        <button className="btn-app-1 fixed right-4 bottom-4">
          <div className="flex flex-row items-center">
            <RegenerateIcon className={"text-[--color-2]"} />
            <span className="px-2">Regenerate</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function Generator() {
  return <ProvideToken Component={(token)=>GeneratorLogique({token:token,UI:GeneratorUI})}/>
}