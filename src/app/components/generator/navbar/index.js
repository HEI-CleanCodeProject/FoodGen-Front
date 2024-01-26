import { UserInformationAccess } from "./UserInformationAccess";
import { Logo } from "./Logo"
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-10">
      <nav className="mx-auto w-full bg-color-1 flex flex-row drop-shadow-xl" aria-label="navigation-bar for the generator page">
        <div className="w-5/6">
          <Logo />
        </div>
        <UserInformationAccess />
      </nav>
    </header>
  );
}