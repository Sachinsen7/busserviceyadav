import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        backgroundImage: "linear-gradient(135deg, #1E3A8A 0%, #10B981 100%)",
      }}
      className=" text-white p-7 raleway-custom "
    >
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
          <a href="/">Yadav Bus Service</a>
        </h1>
        <ul className="flex space-x-4 font-bold font-raleway">
          <NavLink className="hover:text-[#F59E0B]">Home</NavLink>
          <NavLink className="hover:text-[#F59E0B]" to={"/package"}>
            Packages
          </NavLink>
          <NavLink className="hover:text-[#F59E0B]" to={"/service"}>
            Service
          </NavLink>
          <NavLink className="hover:text-[#F59E0B]" to={"/gallery"}>
            Gallery
          </NavLink>
          <NavLink className="hover:text-[#F59E0B]" to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className="hover:text-[#F59E0B]" to={"/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
