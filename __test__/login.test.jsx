import React from "react";
import { render, screen } from "@testing-library/react";
import Load from "../src/app/(pages)/login/page";
import { describe, expect, it } from "@jest/globals";

describe("verify if log in is installed", () => {
  it("should render log in", () => {
    render(<Load />);
    const email = screen.getAllByPlaceholderText("Email address");
    const password = screen.getAllByPlaceholderText("Password");
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
  });
});
