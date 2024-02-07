"use client"
import axios from "axios"

const app = axios.create({
  baseURL:process.env.NEXT_PUBLIC_BASE_URL,
  headers:{
    'Content-Type': 'application/json',
  }
})

export const authProvider = {
  login: async (data) => {
    //TODO: implement proper provider
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
    //TODO: implement proper createUser
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
    return {
      usename:"tsy aiko",
      email:"@zavatra"
    }
    // return app.get("/users/whoami",{
    //   headers:{
    //     Authorization:"Bearer "+token
    //   }
    // }).then((user)=>{
    //   return user.data;
    // }).catch((e)=>{
    //   throw e;
    // })
  },
  
  getMeals: async (token) => {
    return [{
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "Pizza",
      "region": {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Italy"
      },
      "recipe": {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "Pizza",
        "readme": "Bunch of text"
      },
      "image": "string",
      "download": 10
    }]
    // return app.get("/meals",{
    //   headers:{
    //     Authorization:"Bearer "+token
    //   }
    // }).then((meals) => {
    //   return meals.data;
    // }).then((e) => {
    //   throw e;
    // })
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