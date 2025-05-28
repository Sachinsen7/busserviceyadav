import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className=" text-white py-10 font-raleway bg-neutralDark"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <motion.div variants={sectionVariants}>
          <h3 className="text-xl font-bold mb-4 text-[#F59E0B]">
            Yadav Bus Services
          </h3>
          <p className="text-white">
            Your trusted partner for comfortable and reliable bus travel across
            India.
          </p>
          <p className="mt-2 text-white">
            Established in 2020, serving thousands of happy travelers.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h3 className="text-xl font-bold mb-4 text-[#F59E0B]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/package"
                className="hover:underline  transition-colors"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:underline  transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:underline  transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline  transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:underline  transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h3 className="text-xl font-bold mb-4 text-[#F59E0B]">Contact Us</h3>
          <p className="text-white">Email: info@yadavbus.com</p>
          <p className="text-white">Phone: +91-123-456-7890</p>
          <p className="text-white">Address: 123 Bus Lane, Jaipur, Rajasthan</p>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h3 className="text-xl font-bold mb-4 text-[#F59E0B]">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook SVG */}
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              aria-label="Follow us on Facebook"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:text-[#F59E0B]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </motion.a>
            {/* Twitter SVG */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              aria-label="Follow us on Twitter"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:text-[#F59E0B]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </motion.a>
            {/* Instagram SVG */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              aria-label="Follow us on Instagram"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:text-[#F59E0B]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.81.227 2.292 1.745 2.146 4.986c-.057 1.28-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.149 3.241 1.667 4.759 4.908 4.908 1.28.057 1.689.072 4.948.072s3.668-.014 4.948-.072c3.241-.149 4.759-1.667 4.908-4.908.057-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.149-3.241-1.667-4.759-4.908-4.908C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-white">
        <p>© 2025 Yadav Bus Services. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
