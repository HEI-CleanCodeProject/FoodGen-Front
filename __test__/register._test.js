import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect} from "@jest/globals";
import Register from "@/app/(pages)/register/page";
import { useForm } from "react-hook-form";


jest.mock("react-hook-form")
jest.mock("next/navigation",()=>({
  useRouter:()=>({
    push:jest.fn()
  })
}))

describe("/describe components test",() => {
  it("should render the register page",() => {
    const mockHandleSubmit = jest.fn();
    useForm.mockReturnValue(() => ({
        register:jest.fn(),
        handleSubmit:mockHandleSubmit
    }))
    render(
      <Register />
    );
    const firstname = screen.getByPlaceholderText("Firstname");
    const lastname = screen.getByPlaceholderText("Lastname");
    const username = screen.getByPlaceholderText("Username");
    const email = screen.getByPlaceholderText("Email address");
    const password = screen.getByPlaceholderText("Password");
    const button = screen.getByRole("register-user");

    const emailTest = "test@example.com";
    const passwordTest = "password123";
    const usernameTest = "@hidden-shit"
    const lastnameTest = "john"
    const firstnameTest = "lenonn"

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
