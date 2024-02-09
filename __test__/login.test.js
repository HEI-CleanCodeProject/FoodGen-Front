import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "@/app/(pages)/login/page";
import { jest, expect} from "@jest/globals";
import { authProvider } from "@/app/provider/authProvider/clientSide";

jest.mock("@/app/provider/authProvider/clientSide");

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push:jest.fn(),
  }),
}));

describe("LoginPage", () => {
  it("should render login form", () => {
    
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText("Email address");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "Log in" });

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it("should submit form with correct data", () => {
    render(<LoginPage />);
    jest.spyOn(authProvider,"login").mockImplementation(async () => "token");
    const emailInput = screen.findByPlaceholderText("Email address");
    const passwordInput = screen.findByPlaceholderText("Password");
    const loginButton = screen.findByRole("button", { name: "Log in" });

    const email = "test@example.com";
    const password = "password123";

    const mockInput = [email, password];
    Promise.all([emailInput,passwordInput]).then((each) => {
      each.forEach((i, j) => {
        fireEvent.change(i, { target: { value: mockInput[j]} });
      })
      loginButton.then((btn) => {
        fireEvent.click(btn);
        expect(authProvider.login).toBeCalled();
      })
    })
  });
});