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
        console.error(e);
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
    }).catch(()=>{
      throw new Error("couldn't create user")
    })
  },
}