"use client"
import axios from "axios"

export const authProvider = {
  login: async ({username, password}) => {
    //TODO: implement proper provider
    return axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/login",{
        "username":username,"password":password
    }).then((token) => {
        console.log(token)
        return token;
    }).catch((e) => {
        console.error(e);
    })
  },

  createUser: async (userToBeCreated) => {
    //TODO: implement proper createUser
    return axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/users", [userToBeCreated]).then((userCreated) => {
      return userCreated;
    }).catch(()=>{
      throw new Error("couldn't create user")
    })
  },

  getUser: async () => {
    const token = sessionStorage.getItem(process.env.SESSION);
    return axios.get(process.env.NEXT_PUBLIC_BASE_URL,{
      headers:{
        Authorization:token
      }
    })
  }
}