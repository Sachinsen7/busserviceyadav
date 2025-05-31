import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const TourCard = ({ image, title, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="rounded-lg shadow-md overflow-hidden border-primary border-2"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-neutralDark ">{title}</h3>
        <p className="text-[#4B5563] mt-2">{description}</p>
        <Link to={`/destination/${title}`}>
          <button className="mt-4 bg-accent text-neutralDark px-4 py-2 rounded-lg font-raleway font-semibold hover:bg-teal transition-colors">
            Explore Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TourCard;
