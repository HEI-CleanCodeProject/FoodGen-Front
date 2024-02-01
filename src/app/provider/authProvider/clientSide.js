"use client"

export const authProvider = {
  login: async ({username, password}) => {
    //TODO: implement proper provider
    return await new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(username === "user" && password === "password"){
            resolve({
                token: "my token"
            })
        }else{
            throw Error("username and password wrong");
        }
      }, 3000)
    }).then((token)=>{
        sessionStorage.setItem("FoodGenToken",token);
        console.log("oke")
        return token;
    }).catch((e)=>{
        console.error(e);
    })

  },
  createUser: async ({}) => {
    //TODO: implement proper createUser
  }
}