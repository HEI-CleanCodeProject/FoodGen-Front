"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen main_bg">
      <nav className="_NavLink text-white">
        <Image
          src="/images/home.png"
          className="_Logo"
          alt="logo"
          height={140}
          width={140}
        />
        <div className="rightSide">
          <Link className="_link" href="/login">
            Login
          </Link>
          <Link className="_link" href="/register">
            Register
          </Link>
        </div>
      </nav>

      <div className="text-white p-4 flex _left">
        <div className="">
          <div className="flex _left_flex">
            <Image
              src="/images/MenuBG.png"
              alt="logo"
              width={500}
              height={500}
            />
            <div className="_Menu">
              <div className="m">
                <div>
                  <p className="_textMenu">Welcoming</p>
                </div>
                <Image
                  src="/images/MenuPointer.png"
                  alt="logo"
                  className="_pointer mouse"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" _right">
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
