"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { authProvider } from "@/app/provider/authProvider/clientSide";
import { useRouter } from "next/navigation";
import CarouselComponent from "@/app/components/carousel/Carousel";
import "./Login.css"

function LoginPageUI({register, handleSubmit, formSubmit}) {
  /*from-emerald-900*/
  return (
    <>
     <div className="_mainBody">
      <div className=" w-full "></div>
       <div className="font-[sans-serif] bg-gradient-to-r  via-emerald-800 to-emerald-600 text-[#333]">
        <div className="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
          <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
            <div className="max-md:text-center">
                <CarouselComponent/>           
            </div>
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="_form_bg rounded-xl px-6 py-8 space-y-12 max-w-md md:ml-auto max-md:mx-auto w-full"
            >
              <h3 className="_loginTitle">
                Log in
              </h3>
              <div>
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
                  className=" w-full text-sm px-4 py-3.5 rounded-md _inputStyle"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  {...register("password", { required: true })}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" w-full text-sm px-4 py-3.5 rounded-md _inputStyle"
                  placeholder="Password"
                />
              </div>
              <div className="!mt-10">
                <button
                  type="submit"
                  className=" shadow-xl py-2.5 px-4 text-sm focus:outline-none _btn"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

// login page take on a props of type Component that have as props: 
function LoginPageLogique({UI}) {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const formSubmit = (data) => {
    console.log(data)
    authProvider.login({data}).then(()=>{
      router.push("/food/generator")
    }).catch((e)=>{
      console.error(e)
    })
  };
  // TODO submit in endpoint ......
  return (
    <UI register={register} handleSubmit={handleSubmit} formSubmit={formSubmit} />
  )
}


export default function LoginPage(){
  return <LoginPageLogique UI={LoginPageUI} />
}