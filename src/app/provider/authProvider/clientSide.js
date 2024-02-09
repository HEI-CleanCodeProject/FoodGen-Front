"use client"
import axios from "axios"

const app = axios.create({
  baseURL:process.env.NEXT_PUBLIC_BASE_URL,
  headers:{
    'Content-Type': 'application/json',
  }
})

export const authProvider = {
  // TODO: logout bro
  logout: async () => {
    sessionStorage.removeItem(process.env.NEXT_PUBLIC_SESSION)
    return "something"
  },

  login: async (data) => {
    return app.post("/users/login",{
      "email":data.email,
      "password":data.password
    }).then((token) => {
      return token.data
    }).catch((e) => {
      throw e;
    })
  },

  createUser: async (userToBeCreated) => {
    return app.post("/users/signup", {
        username:userToBeCreated.username,
        password:userToBeCreated.password,
        email:userToBeCreated.email
      }).then((userCreated) => {
      return userCreated.data;
    }).catch((e)=>{
      throw e;
    })
  },

  whoami: async (token) => {
    return app.get("/users/whoami",{
      headers:{
        Authorization:"Bearer "+token
      }
    }).then((user)=>{
      return user.data;
    }).catch((e)=>{
      throw e;
    })
  },
  
  getMealsRating: async (token) => {
    return app.get("/mealsByRating?",{
      headers:{
        Authorization:"Bearer "+token
      }
    }).then((meals) => {
      return meals.data;
    }).catch((e) => {
      throw e;
    })
  },
  
  getMealsRandom: async (token) => {
    return app.get("/meals",{
      headers:{
        Authorization:"Bearer "+token
      }
    }).then((meals) => {
      return meals.data;
    }).catch((e) => {
      throw e;
    })
  },

  getRecipe: async (mealId ,token) => {
    return app.get(`/recipes/${mealId}`,{
      headers:{
        Authorization:"Bearer "+token
      }
    }).then((recipe) => {
      return recipe.data;  
    }).catch((e) => {
      throw e;
    })
  }
}