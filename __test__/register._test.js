import React, { use } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect} from "@jest/globals";
import Register from "@/app/(pages)/register/page";
import { useForm } from "react-hook-form";
import { authProvider } from "@/app/provider/authProvider/clientSide";

jest.mock("@/app/provider/authProvider/clientSide");

describe("/describe components test",() => {
  it("should render the register page",async () => {
    const mockHandleSubmit = jest.fn();
    
    useForm.mockReturnValue(() => ({
        register:jest.fn(),
        handleSubmit:mockHandleSubmit
    }))
    render(
      <Register />
    );
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
        fireEvent.click(btn)
      })
    })
    fireEvent.change(email, { target: { value: emailTest} });
    fireEvent.change(password, { target: { value: passwordTest} });
    fireEvent.change(firstname, { target: { value: firstnameTest} });
    fireEvent.change(lastname, { target: { value: lastnameTest} });
    fireEvent.change(username, { target: { value: usernameTest} });
    act(()=>{
        fireEvent.click(button);
    })

    expect(mockHandleSubmit).toHaveBeenCalled();    
  })
})
