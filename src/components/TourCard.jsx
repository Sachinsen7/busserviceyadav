import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 100, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 100 },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

const TourCard = ({ image, title, description }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)" }}
    className="rounded-lg shadow-md overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-[#1E3A8A] font-raleway">{title}</h3>
      <p className="text-[#4B5563] mt-2">{description}</p>
      <motion.a
        href="/book"
        whileHover={{ scale: 1.1 }}
        className="mt-4 inline-block bg-[#F59E0B] text-[#1E3A8A] px-4 py-2 rounded-lg font-raleway font-semibold"
      >
        Explore Now
      </motion.a>
    </div>
  </motion.div>
);

export default TourCard;
