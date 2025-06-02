import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { destinations } from "../data/destinations.js";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const FeaturedDestinations = () => {
  const featured = destinations.slice(0, 3);

  return (
    <section className="container mx-auto py-10 px-4 bg-lightGray">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-teal mb-8"
      >
        Featured Destinations
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((dest, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {dest.title}
              </h3>
              <p className="text-white mb-4">{dest.description}</p>
              <Link to={`/destination/${dest.title}`}>
                <button className="bg-accent text-neutralDark px-4 py-2 rounded-lg font-semibold hover:bg-teal  transition-transform 
                    hover:scale-105">
                  Explore Now
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
