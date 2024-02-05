import axios from "axios"
import { cookies } from "next/headers";

export const authProvider = {
  whoami: async () => {
    const token = cookies.getItem(process.env.SESSION);
    return axios.get(process.env.NEXT_PUBLIC_BASE_URL,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  }
}