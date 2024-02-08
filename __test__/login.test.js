import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "@/app/(pages)/login/page";

// jest.mock('next/navigation', () => ({
//   useRouter: () => ({
//     push: jest.fn(),
//   }),
// }));

xdescribe("LoginPage", () => {
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

    const emailInput = screen.getByPlaceholderText("Email address");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "Log in" });

    const email = "test@example.com";
    const password = "password123";

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(loginButton);

  });
});