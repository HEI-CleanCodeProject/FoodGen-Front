"use client";
import React from "react";
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
      <div class="flex items-center justify-center p-12">
        {/* <!-- Author: FormBold Team --> */}
        <div class="mx-auto w-full max-w-[550px] bg-white">
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
                required={true}
                register={register}
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
                required={true}
                register={register}
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
                required={true}
                register={register}
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
                required={true}
                register={register}
                validate={isValidEmail}
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
                required={true}
                register={register}
              />
            </div>
            <div>
              <button class="hover:shadow-form w-full rounded-md bg-[#00cc00] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Sing in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
