import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Animation variants for page transitions
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Layout component wraps all pages with header, footer, and animated main content
const Layout = () => (
  <div className="min-h-screen flex flex-col font-raleway bg-white">
    {/* Site header */}
    <Header />
    {/* Main content area with page transition animation */}
    <motion.main
      className="flex-grow"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Render the matched child route */}
      <Outlet />
    </motion.main>
    {/* Site footer */}
    <Footer />
  </div>
);

export default Layout;
