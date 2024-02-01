"use client"
import React from "react"
import { authProvider } from "@/app/provider/authProvider/clientSide"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function Register() {
  return <RegisterLogique UI={RegisterSimpleDesignUi} />
}

function RegisterLogique({ UI }) {

  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
    }
  })

  const formSubmit = (data) => {
    console.log(data)
    authProvider.createUser(data).then((user) => {
      if (user) {
        router.push("/login")
      }
    }).catch((e) => {
      throw e;
    });
  }

  return <UI register={register} formSubmit={formSubmit} handleSubmit={handleSubmit} />;
}

function RegisterSimpleDesignUi({ register, formSubmit, handleSubmit }) {
  return (
    <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div class="bg-white shadow-md rounded-md p-6">

          <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

          <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>


          <form class="space-y-6" method="POST">

            <div>
              <label class="block text-sm font-medium text-gray-700">Firstname</label>
              <div class="mt-1">
              <input
                {...register("first_name", { required: true })}
                name="first_name"
                type="text"
                autoComplete="current-first_name"
                required
                className="register-input"
                placeholder="firstname"
              />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Lastname</label>
              <div class="mt-1">
                <input
                  {...register("last_name", { required: true })}
                  name="last_name"
                  type="text"
                  autoComplete="current-last_name"
                  required
                  className="register-input"
                  placeholder="lastname"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Username</label>
              <div class="mt-1">
                <input
                  {...register("username", { required: true })}
                  name="username"
                  type="text"
                  autoComplete="current-username"
                  required
                  className="register-input"
                  placeholder="@username"
                />
              </div>
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
              <div class="mt-1">
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
                className="register-input"
                placeholder="Email address"
              />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Password</label>
              <div class="mt-1">
              <input
                {...register("password", { required: true })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="register-input"
                placeholder="Password"
              />
              </div>
            </div>
            <div>
    
              <button type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
