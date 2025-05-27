import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/logoBus.png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState();

  const toggleMenuBtn = (e) => {
    e.stopPropagation();
    console.log("Toggle clicked");
    setIsMenuOpen((prev) => !prev);
  };

  // const toggleDarkMode = () => {
  //   setDarkMode((prev) => !prev);
  // };

  return (
    <header
      style={{
        backgroundImage: "linear-gradient(135deg, #1E3A8A 0%, #10B981 100%)",
      }}
      className=" text-white sm:p-7 raleway-custom "
    >
      <nav className="container mx-auto flex justify-between">
        <h1 className="sm:text-xl text-sm font-bold">
          <a className="hidden sm:block" href="/">
            Yadav Bus Service
          </a>
          <a href="/home" className="cursor-pointer">
            {" "}
            <img src={logo} alt="" className="w-32 h-28 sm:hidden" />
          </a>
        </h1>
        <ul className="flex space-x-4 font-bold font-raleway hidden">
          <NavLink className="hover:text-[#F59E0B]" to={"/home"}>
            Home
          </NavLink>
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
        <button className="bg-[#F59E0B] text-[#1E3A8A] px-4 py-2 rounded-lg font-bold font-raleway hover:bg-[#1E3A8A] hover:text-[#F59E0B] hidden">
          <a href="/book">Book Now</a>
        </button>

        {/* mobile menu */}

        <div className="relative w-full flex items-center justify-end sm:hidden">
          <button
            onClick={toggleMenuBtn}
            className="p-2 rounded-full hover:bg-[#5A9AA3] transition-colors duration-200 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#EEEEEE"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#EEEEEE"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            )}
          </button>

          <ul
            className={`absolute top-16 right-0 w-48 p-4 rounded-lg shadow-lg flex flex-col gap-3 z-50 transition-all duration-300 ease-out bg-[#1E3A8A] ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
            } `}
          >
            {[
              { name: "Home", to: "/home" },
              { name: "Packages", to: "/package" },
              { name: "Service", to: "/service" },
              { name: "Gallery", to: "/gallery" },
              { name: "Contact", to: "/contact" },
              { name: "About", to: "/about" },
            ].map(({ name, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block w-full ${
                      isActive ? "text-[#EEEEEE]" : ""
                    } transition-colors duration-200 hover:text-[#F59E0B]`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
