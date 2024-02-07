"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import getRandomMealImage from "./provider/assets/getImage";

const HomePage = () => {
  const [mealImage, setMealImage] = useState("");

  useEffect(() => {
    getRandomMealImage().then((imageURL) => {
      setMealImage(imageURL);
    });
  }, []);
  return (
    <div className=" min-h-screen main_bg">
      <nav className="_NavLink text-white">
        <Link className="_link" href="/">Home</Link>
        <Link className="_link" href="/login">Login</Link>
        <Link className="_link" href="/register">Register</Link>
      </nav>
      <div className="text-white p-4 flex">
        <div className="w-1/2 p-4">
          <img
            src={mealImage}
            alt="Your Image"
            className="max-h-102 max-w-102"
          />
        </div>
        <div className="w-1/2 p-4">
          <p>Right part</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
