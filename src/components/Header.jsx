import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logoBus from "../assets/logoBus.png";
import BookingInquiryForm from "./BookingInquiryForm.jsx";

// Header component with navigation and booking modal
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Toggle mobile menu
  const toggleMenuBtn = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  // Animation variants for nav links and underline
  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const underlineVariants = {
    initial: { width: "0%" },
    hover: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
    active: { width: "100%", transition: { duration: 0.3 } },
  };

  // Handle "Book Now" button click
  const handleBookNow = () => {
    setSelectedService({
      name: "General Booking",
      type: "general",
    });
    setIsModalOpen(true);
  };

  return (
    <header className="bg-neutralDark text-white sm:p-7 JosefinSans">
      <nav className="container mx-auto flex justify-between">
        {/* Logo and site name */}
        <h1 className="sm:text-xl text-sm ">
          <a className="hidden sm:block" href="/home">
            Yadav Bus Service
          </a>
          <a href="/home" className="cursor-pointer">
            <img src={logoBus} alt="" className="w-32 h-28 sm:hidden" />
          </a>
        </h1>
        {/* Desktop navigation links */}
        <ul className="space-x-4  hidden sm:flex text-lg font-raleway">
          {[
            { to: "/home", label: "Home" },
            { to: "/package", label: "Packages" },
            { to: "/service", label: "Service" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
            { to: "/about", label: "About" },
          ].map((link, index) => (
            <motion.li
              key={index}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block text-white hover:text-accent-gold transition-colors duration-300 ${
                    isActive ? "text-accent-gold" : ""
                  }`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <motion.span
                      variants={underlineVariants}
                      initial="initial"
                      animate={isActive ? "active" : "initial"}
                      whileHover="hover"
                      className="absolute left-0 bottom-[-2px] h-0.5 bg-accent-gold"
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        {/* Desktop Book Now button */}
        <button
          onClick={handleBookNow}
          className="bg-secondary text-white px-4 py-2 rounded-lg  transition-colors duration-200 hover:bg-[#5A9AA3] hidden sm:block"
        >
          Book Now
        </button>

        {/* Mobile menu toggle and menu */}
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

          {/* Mobile navigation links */}
          <ul
            className={`absolute top-16 right-0 w-48 p-4 rounded-lg shadow-lg flex flex-col gap-6 z-50 transition-all duration-300 ease-out bg-neutralDark ${
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

        {/* Booking Inquiry Modal */}
        {selectedService && (
          <BookingInquiryForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceType="general"
            serviceName={selectedService.name}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;