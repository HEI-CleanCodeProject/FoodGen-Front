"use client"
import React from "react"
import { authProvider } from "@/app/provider/authProvider/clientSide"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function Register(){
    return <RegisterLogique UI={RegisterUi} />
}

function RegisterUi({register, formSubmit, handleSubmit}){
    return(
        <form onSubmit={handleSubmit(formSubmit)}>
            <input 
              {...register("first_name", { required: true })}
              name="first_name"
              type="text"
              autoComplete="current-first_name"
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
              placeholder="firstname"
            />
            <input 
              {...register("last_name", { required: true })}
              name="last_name"
              type="text"
              autoComplete="current-last_name"
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
              placeholder="lastname"
            />
            <input 
              {...register("username", { required: true })}
              name="username"
              type="text"
              autoComplete="current-username"
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
              placeholder="@username"
            />
            <input
              {...register("email", {
                required: true,
                validate: {
                  isValidEmail: (value) =>
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                      value,
                    ) || "Email is not valid",
                },
              })}
              name="email"
              type="email"
              autoComplete="email"
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
              placeholder="Email address"
            />
            <input
              {...register("password", { required: true })}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}

function RegisterLogique({UI}){

  const router = useRouter();
  const {register,handleSubmit} = useForm({
      defaultValues:{
          first_name:"",
          last_name:"",
          username:"",
          password:"",
          email:"",
      }
  })

  const formSubmit = (data) => {
    console.log(data)
    authProvider.createUser(data).then((user)=>{
      if(user){
        router.push("/login")
      }
    }).catch((e)=>{
      throw e;
    });
  }

  return <UI register={register} formSubmit={formSubmit} handleSubmit={handleSubmit} />;
}




