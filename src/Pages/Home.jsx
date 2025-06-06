import React from "react";
import { motion } from "framer-motion";

// Importing all the main sections/components for the homepage
import Hero from "../components/Hero.jsx";
import TourCard from "../components/TourCard.jsx";
import BookingForm from "../components/BookingForm.jsx";
import Gallery from "../components/Gallery.jsx";
import Services from "../components/Services.jsx";
import Packages from "../components/Packages.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import ReviewSection from "../components/ReviewSection.jsx";
import { destinations } from "../data/destinations.js";
import FeaturedDestinations from "../components/FeaturedDestinations.jsx";

// Animation variants for section headings
const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Main Home component
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col font-raleway bg-white"
    >
      <main className="flex-grow">
        {/* Hero section at the top */}
        <Hero />

        {/* Featured destinations carousel/section */}
        <FeaturedDestinations />

        {/* Top Destinations grid */}
        <section className="container mx-auto py-10 px-4">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-primary-blue mb-8"
          >
            Explore Top Destinations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render a TourCard for each destination */}
            {destinations.map((dest, index) => (
              <TourCard
                key={index}
                image={dest.image}
                title={dest.title}
                description={dest.description}
              />
            ))}
          </div>
        </section>

        {/* Gallery section */}
        <Gallery />

        {/* Services section */}
        <Services />

        {/* Packages section */}
        <Packages />

        {/* Booking form section */}
        <BookingForm />

        {/* Divider */}
        <div className="border-b border-neutralDark border-2"></div>

        {/* Customer reviews/testimonials */}
        <ReviewSection />

        {/* Divider */}
        <div className="border-b border-neutralDark border-2"></div>

        {/* About section */}
        <About />

        {/* Divider */}
        <div className="border-b border-neutralDark border-2"></div>

        {/* Contact section */}
        <Contact />
      </main>
    </motion.div>
  );
};

export default Home;