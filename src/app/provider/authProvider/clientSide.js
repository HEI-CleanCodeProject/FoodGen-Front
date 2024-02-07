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
    return app.get("/users/whoami",{
      headers:{
        Authorization:"Bearer "+token
      }
    }).then((user)=>{
      return user.data;
    }).catch((e)=>{
      throw e;
    })
  }
}