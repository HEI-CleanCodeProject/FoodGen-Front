import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect} from "@jest/globals";
import Register from "@/app/(pages)/register/page";

describe("/describe components test",() => {
  it("should render the register page",() => {
    render(
      <Register />
    );
    
  })
})
