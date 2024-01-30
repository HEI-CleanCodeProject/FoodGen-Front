"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [payload, setPayload] = useState();
  const formData = watch();
  const formSubmit = (data) => {};
  // TODO submit in endpoint ......
  return (
    <>
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
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email is not valid",
              },
            })}
            name="email"
            type="email"
            autocomplete="email"
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
            autocomplete="current-password"
            required
            className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
            placeholder="Password"
          />
        </div>
        <div className="!mt-10">
          <button
            type="button"
            className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-[#222] focus:outline-none"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
}
