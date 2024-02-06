import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect} from "@jest/globals";
import LoginPage from "@/app/(pages)/login/page";
import Register from "@/app/(pages)/register/page";

describe("/describe components test",() => {
  it("should render the register page",() => {
    render(
      <Register />
    );
    
  })
})
