import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-900 text-white p-7 raleway-custom ">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Yadav Bus Service</h1>
        <ul className="flex space-x-4 font-bold font-raleway">
          <NavLink className="hover:text-accent-gold">Home</NavLink>
          <NavLink>Packages</NavLink>
          <NavLink>Service</NavLink>
          <NavLink>Gallery</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>About</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
