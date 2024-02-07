import { authProvider } from "@/app/provider/authProvider/clientSide";
import ProvideToken from "@/app/provider/sessionProvider";
import React,{ useEffect, useState } from "react"

function ListIngredientsUI({ ingredients }) {
    return (
        <ul class="list-disc list-inside font-semibold">
            <li>First level item</li>
            <li>First level item</li>
            <li>First level item</li>
        </ul>
    )
}

function ListIngredientsLogique({UI, token}){
  const [ingredients, setIngredients] = useState(null);
  useEffect(()=>{
    
  },[token])
  return(
    <UI ingredients={ingredients}/>
  )
}

export function ListIngredients(){
  return(
    <ProvideToken Component={(token)=>ListIngredientsLogique({token:token,UI:ListIngredientsUI})}/>
  )
}