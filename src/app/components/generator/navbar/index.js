import { UserInformationAccess } from "./UserInformationAccess";
import { Logo } from "./Logo"

export default function Header() {
  return (
    <header>
      <nav className="mx-auto w-full bg-color-1 flex flex-row shadow-xl" aria-label="navigation-bar for the generator page">
        <div className="w-5/6">
          <Logo />
        </div>
        <UserInformationAccess />
      </nav>
    </header>
  );
}