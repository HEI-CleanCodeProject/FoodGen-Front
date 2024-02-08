"use client"

import React, { useEffect, useState } from "react";
import { authProvider } from "@/app/provider/authProvider/clientSide";
import Card from "../card";

export function ListMeals({token}){
  const [meals, setMeals] = useState(null);
    
  useEffect(()=>{
    if(token){
      authProvider.getMeals(token).then((meals)=>{
        setMeals(meals)
      })
    }
  },[token])
  return(
    <>{meals ? meals.map((meal)=><Card key={meal.id} meal={meal}/> ):<>no meals where loaded</>}</>
  )
}