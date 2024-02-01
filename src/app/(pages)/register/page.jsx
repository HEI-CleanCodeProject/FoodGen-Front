"use client";
import React, { useState } from "react";
import Input from "@/app/components/input";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const [payload, setPayload] = useState();
  const formData = watch();
  const formSubmit = (data) => {};
  // TODO submit in endpoint ......
  const isValidEmail = (value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    "Email is not valid";

  return (
    <>
      <div class="flex items-center justify-center p-12 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-600 z-0">
        {/* <!-- Author: FormBold Team --> */}
        <div class="mx-auto w-full max-w-[550px] bg-white shadow-md p-4 rounded-lg z-10">
          <form onSubmit={handleSubmit(formSubmit)}>
            <div class="mb-5">
              <label
                for="user name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                User Name
              </label>
              <Input
                name={"username"}
                type={"text"}
                id={"user name"}
                placeholder={"User Name"}
                {...register("username", {
                  required: true,
                })}
              />
            </div>
            <div class="mb-5">
              <label
                for="first name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <Input
                name={"first name"}
                type={"text"}
                id={"first name"}
                placeholder={"First Name"}
                {...register("firstname", {
                  required: true,
                })}
              />
            </div>
            <div class="mb-5">
              <label
                for="last name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last Name
              </label>
              <Input
                name={"last name"}
                type={"text"}
                id={"last name"}
                placeholder={"Last Name"}
                {...register("lastname", {
                  required: true,
                })}
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <Input
                name={"email"}
                type={"email"}
                id={"email"}
                placeholder={"Enter your email"}
                {...register("email", {
                  required: true,
                  validate: {
                    isValidEmail: (value) =>
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email is not valid",
                  },
                })}
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                password
              </label>
              <Input
                name={"password"}
                type={"password"}
                id={"password"}
                placeholder={"Your Password"}
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <div>
              <button class="hover:shadow-form w-full rounded-md bg-[#347854] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Sing in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
