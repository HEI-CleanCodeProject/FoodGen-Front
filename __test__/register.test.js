import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect} from "@jest/globals";
import Register from "@/app/(pages)/register/page";
import { useForm } from "react-hook-form";

jest.mock("@/app/provider/authProvider/clientSide");

jest.mock("react-hook-form",() => (
  {
    useForm:(values)=>{
      return {
        register:jest.fn(),
        handleSubmit:jest.fn()
      }
    }
  }
));
jest.mock("next/navigation", ()=>(
  {
    useRouter:jest.fn()
  }
));

describe("/describe components test",() => {
  it("should render the register page",async () => {
    render(
      <Register />
    );
    const { handleSubmit } = useForm({defaultValues:{mock:'oke'}})

    const firstname = screen.findByPlaceholderText("Firstname");
    const lastname = screen.findByPlaceholderText("Lastname");
    const username = screen.findByPlaceholderText("Username");
    const email = screen.findByPlaceholderText("Email address");
    const password = screen.findByPlaceholderText("Password");
    const button = screen.findByRole("register-user");

    const emailTest = "test@example.com";
    const passwordTest = "password123";
    const usernameTest = "@hidden-shit"
    const lastnameTest = "john"
    const firstnameTest = "lenonn"

    const mockValue = [firstnameTest,lastnameTest,usernameTest,emailTest,passwordTest]

    Promise.all([firstname,lastname,username,email,password]).then((each)=>{
      each.map((item,i) => {
        fireEvent.change(item, { target: { value: mockValue[i]} });
      })
      button.then((btn)=>{
        console.log("clicked")
        fireEvent.click(btn)
        expect(handleSubmit).toBeCalled();
      })
    })
  })
})
