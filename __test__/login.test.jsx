import { render, screen } from "@testing-library/react";
import Load from "@/app/login/page";
import { describe, expect, it } from "@jest/globals";

describe("verify if log in is installed", () => {
  it("render log in", () => {
    render(<Load />);
    const email = screen.getAllByPlaceholderText("Email address");
    const password = screen.getAllByPlaceholderText("Password");
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
