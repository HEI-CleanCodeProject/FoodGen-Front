import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
     <div className="main_bg">
      <nav className="_NavLink text-white">
        <Link className="_link" href="/">Home</Link>
        <Link className="_link" href="/login">Login</Link>
        <Link className="_link" href="/register">Register</Link>
      </nav>
      </div>
    </div>
  );
};

export default HomePage;
