import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations.js";

// Animation variants for page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Animation variants for the back button
const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const DestinationDetails = () => {
  // Get the destination title from the URL params
  const { title } = useParams();

  // Find the destination object by title
  const destination = destinations.find((dest) => dest.title === title);

  // If destination is not found, show a not found message
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-lightGray">
        <h2 className="text-3xl font-bold text-teal">Destination Not Found</h2>
      </div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-lightGray font-raleway"
    >
      {/* Hero image section with overlay and title */}
      <section className="relative h-96">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{destination.title}</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-teal mb-6">Overview</h2>
        <p className="text-neutralDark text-lg leading-relaxed">
          {destination.details.overview}
        </p>
      </section>

      {/* Attractions Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-teal mb-6">Top Attractions</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* List each attraction */}
          {destination.details.attractions.map((attraction, index) => (
            <li
              key={index}
              className="bg-neutralDark p-4 rounded-lg shadow-md text-white  "
            >
              • {attraction}
            </li>
          ))}
        </ul>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-teal mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Render each gallery image */}
          {destination.details.imageGallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${destination.title} ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="container mx-auto py-12 px-4 text-center">
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link
            to="/home"
            className="inline-block bg-secondary text-white px-4 py-2 rounded-lg font-extrabold text-base hover:bg-accent-gold hover:text-primary-blue transition-colors"
            aria-label="Back to Home"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default DestinationDetails;