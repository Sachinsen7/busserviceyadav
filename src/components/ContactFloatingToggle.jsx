import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import { useState } from "react";

const ContactFloatingToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    exit: (i) => ({
      opacity: 0,
      y: 20,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks = {
    instagram: "https://instagram.com/yadavbusservices",
    whatsapp: "https://wa.me/917879973266", // Replace with your WhatsApp number
    email: "mailto:support@yadavbusservices.com",
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={handleToggle}
        className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-orange transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaCommentDots size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-center gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >

            {/* whatsapp     */}

            <motion.a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={1}
              className="bg-white text-teal p-3 rounded-full shadow-md hover:bg-orange hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaWhatsapp size={20} />
            </motion.a>
            {/* instagram */}

            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0}
              className="bg-white text-teal p-3 rounded-full shadow-md hover:bg-orange hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram size={20} />
            </motion.a>

            

            {/* Email */}
            <motion.a
              href={socialLinks.email}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={2}
              className="bg-white text-teal p-3 rounded-full shadow-md hover:bg-orange hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaEnvelope size={20} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactFloatingToggle;
