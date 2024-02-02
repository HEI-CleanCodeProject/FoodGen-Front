"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { authProvider } from "@/app/providers/authProvider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmit = (data) => {
    authProvider
      .login(data)
      .then(() => {
        router.push("food/generator");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // TODO submit in endpoint ......
  return (
    <>
      <div className="font-[sans-serif] bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-600 text-[#333]">
        <div className="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
          <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
            <div className="max-md:text-center">
              <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
                Seamless Login for Exclusive Access
              </h2>
              <p className="text-sm mt-6 text-white">
                Immerse yourself in a hassle-free login journey with our
                intuitively designed login form. Effortlessly access your
                account.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(formSubmit)}
              className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full"
            >
              <h3 className="text-3xl font-extrabold mb-12 max-md:text-center">
                Log in
              </h3>
              <div>
                <input
                  {...register("email", {
                    required: true,
                    validate: {
                      isValidEmail: (value) =>
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
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
              </div>
              <div>
                <input
                  {...register("password", { required: true })}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                  placeholder="Password"
                />
              </div>
              <div className="!mt-10">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-[#222] focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}