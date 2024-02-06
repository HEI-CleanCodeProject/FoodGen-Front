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
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
      <div className="text-white p-4 flex">
        <div className="w-1/2 p-4">
          <img
            src={mealImage}
            alt="Your Image"
            className="w-full h-auto max-h-132 max-w-132"
          />
        </div>
        <div className="w-1/2 p-4">
          <p>Texte de la partie droite.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
