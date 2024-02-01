import axios from "axios"

export const authProvider = {
  getUser: async () => {
    const token = sessionStorage.getItem(process.env.SESSION);
    return axios.get(process.env.NEXT_PUBLIC_BASE_URL,{
      headers:{
        Authorization:token
      }
    })
  }
}