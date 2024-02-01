export const authProvider = {
  getUser: async () => {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({
            id:"id",
            username:"myudjerName",
            firstName:"Rio",
            lastName:"Camero",
            email:"test.email@gmail.com"
        })
      }, 3000)
    })
  }
}