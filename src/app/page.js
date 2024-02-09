"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import getRandomMealImage from "./provider/assets/getImage";

const HomePage = () => {
  /*const [mealImage, setMealImage] = useState("");

  useEffect(() => {
    getRandomMealImage().then((imageURL) => {
      setMealImage(imageURL);
    });
  }, []);*/

  return (
    <div className="min-h-screen main_bg">
      <nav className="_NavLink text-white">
        <label className="_home_logo" htmlFor="homeLink">
          <Image
            src="/images/home.png"
            alt="main image"
            className=""
            width={102}
            height={102}
          />
        </label>

        <Link id="homeLink" className="_link _hide" href="/">
          Home
        </Link>
        <Link className="_link" href="/login">
          Login
        </Link>
        <Link className="_link" href="/register">
          Register
        </Link>
      </nav>
      <div className="text-white p-4 flex _left">
        <div className="w-1/2">
          <div className="flex ">
            <Image
              src="/images/MenuBG.png"
              alt="logo"
              width={400}
              height={400}
            />
            <Image
              src="/images/MenuPointer.png"
              alt="logo"
              className="_pointer"
              width={80}
              height={40}
            />
          </div>
        </div>
        <div className="w-1/2 _right">
          <Image
            src="/images/foodMenu.png"
            alt="main image"
            className="homeImage"
            width={432}
            height={432}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
