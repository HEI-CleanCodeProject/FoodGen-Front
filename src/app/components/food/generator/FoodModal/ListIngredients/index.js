import { authProvider } from "@/app/provider/authProvider/clientSide";
import ProvideToken from "@/app/provider/sessionProvider";
import React,{ useEffect, useState } from "react"

function ListIngredientsUI({ ingredient }) {
    return (
        <ul class="list-disc list-inside font-semibold">
            <li>First level item</li>
            <li>First level item</li>
            <li>First level item</li>
        </ul>
    )
}

function ListIngredientsLogique({UI, meal, token}){
  const [recipe, setRecipe] = useState(null);
  useEffect(()=>{
    authProvider.getRecipe(meal.id,token).then((recipe)=>{
        setRecipe(recipe);
    }).catch((e)=>{
        console.log("can't fetch recipe")
    })
<<<<<<< HEAD
  },[meal.id,token])
=======
  },[token, meal])
>>>>>>> 1092c54a50498ee8ad5e69c4064209520a638183

  if(!recipe) return <>fetching recipe</>
  
  return(
    <UI ingredient={recipe.ingredient}/>
  )
}

export function ListIngredients({meal}){
  return(
    <ProvideToken Component={(token)=>ListIngredientsLogique({token:token,meal:meal,UI:ListIngredientsUI})}/>
  )
}