import React from "react";
import { describe, expect, it } from "@jest/globals";
import Card from "../src/app/components/food/generator/card/";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";
import  FoodRootLayout from "@/app/(pages)/food/layout";
import Generator from "@/app/(pages)/food/generator/page";

describe("generator is correctly set", () => {
  beforeAll(()=>{
    render(
      <RootLayout>
        <FoodRootLayout>
            <Generator />
        </FoodRootLayout>
      </RootLayout>
    ) 
  });

  it("should render the Navbar",() => {
    const navbar = screen.getByTestId("my-navbar")
    expect(navbar).toBeTruthy();
  })
  it("should render Generator main page",() => {
  })
})