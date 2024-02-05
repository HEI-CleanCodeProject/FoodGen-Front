import React from "react";
import { describe,  it } from "@jest/globals";
import { render } from "@testing-library/react";
import Generator from "@/app/(pages)/food/generator/page";
import Navbar from "@/app/components/food/generator/navbar";

describe("Generator TestCase ", () => {
  beforeAll(()=>{
    render(
      <Generator />
    ) 
  });

  it("should render Generator main page",() => {
  })
})

describe("Navbar TestCase", () => {
  it("should have the user informations inside the modal", ()=>{
    render(
      <Navbar user={{}}/>
    )
  })
})