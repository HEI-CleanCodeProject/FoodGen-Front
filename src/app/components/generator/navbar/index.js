import { DarkZone } from "./DarkZone";
import { Logo } from "./Logo"

export default function () {
  return(
    <header>
      <nav className="mx-auto w-full bg-color-1 flex flex-row shadow-xl" aria-label="navigation-bar for the generator page">
        <div className="w-5/6">
          <a href="#"><Logo /></a>
        </div>
        <DarkZone />
      </nav>
    </header>
  )
}