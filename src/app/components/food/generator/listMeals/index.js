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
    <>{meals ? meals.map((meal, i)=><Card meal={meal} key={"CardMeal" + i} /> ):<>no meals where loaded</>}</>
  )
}