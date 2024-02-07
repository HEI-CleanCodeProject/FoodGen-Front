import axios from "axios"
import { cookies } from "next/headers";

const app = axios.create({
  baseURL:process.env.NEXT_PUBLIC_BASE_URL,
  headers:{
    'Content-Type': 'application/json',
  }
})

export const authProvider = {
  whoami: async () => {
    const token = cookies.getItem(process.env.SESSION);
    console.log(token);
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