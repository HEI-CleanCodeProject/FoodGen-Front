import React from "react";
import { describe, it, expect} from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Generator from "@/app/(pages)/food/generator/page";
import Navbar from "@/app/components/food/generator/navbar";
import ContextProvider from "@/app/contextProvider";

describe("Generator TestCase ", () => {
  beforeAll(()=>{
    render(
      <ContextProvider>
        <Generator />
      </ContextProvider>
    ) 
  });

  it("should render Generator main page",() => {
    const root = screen.findByTestId("generator");
    root.then((value)=>{
      expect(value).toBeInstanceOf(HTMLElement);
    }).then((e)=>{

    })
  })
})

describe("Navbar TestCase", () => {
  it("should render the navbar and have the user informations inside the modal", ()=>{
    render(
      <Navbar
        user={{
          username:"hidden-machina",
          firstname:"cocorico",
          lastname:"banzai",
          email:"test.test@gmail.com"
        }
      }/>
    )
    const navbarRendered = screen.findByTestId("my-navbar")
    const userInformationsButton = screen.findByTestId("user-informations-btn")
    navbarRendered.then((navbar)=>{
      expect(navbar).toBeInstanceOf(HTMLElement);
      fireEvent.click(userInformationsButton);
    })
    const modalRendered = screen.findByTestId("modal-rendered")
    const userInformationsRendered = screen.findByTestId("user-informations")
    Promise.all([modalRendered,userInformationsRendered]).then((values)=>{
      expect(values[0]).toBeInstanceOf(HTMLElement);
      expect(values[1]).toBeInstanceOf(HTMLElement);
    })
  })
})