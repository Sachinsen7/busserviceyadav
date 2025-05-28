import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Layout = () => (
  <div className="min-h-screen flex flex-col font-raleway bg-white">
    <Header />
    <motion.main
      className="flex-grow"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Outlet />
    </motion.main>
    <Footer />
  </div>
);

export default Layout;
